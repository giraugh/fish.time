const fetch = require('cross-fetch')
const aws = require('aws-sdk')

const ses = new aws.SES({ region: 'ap-southeast-2' })

const API_HOST = 'https://aqueduct.fish.giraugh.xyz'
const API_PATH = '/long-running-timers'
const API_LAMBDA_KEY = process.env.API_LAMBDA_KEY

exports.handler = async (event, context, callback) => {
  
  // Perform API request to get emails of users w/ long-running timers
  const { timers } = await fetch(`${API_HOST}${API_PATH}?key=${API_LAMBDA_KEY}`)
    .then(r => r.json())
    .catch(error => {
      console.error(error)
      return { statusCode: 500, body: JSON.stringify({ error }) }
    })

  // Do we no have emails to send?
  if (!timers || timers.length === 0) {
    return { statusCode: 200, body: JSON.stringify({}) }
  }

  // Send emails
  const results = await Promise.all(timers.map(async t => ses.sendEmail({
      Destination: {
        ToAddresses: [t.user.email],
      },
      Message: {
        Body: {
          Text: { Data: "Did you forget your fish timer?" },
        },
        Subject: { Data: `Your fish timer "${t.description}" has been running for over a day!` },
      },
      Source: "noreply@fish.giraugh.xyz",
    }).promise()
  )).catch(error => {
    console.error(error)
    return { statusCode: 500, body: JSON.stringify({ error }) }
  })

  console.log(results)

  // Return response of email addresses sent
  return {
    statusCode: 200,
    body: JSON.stringify({ emails: timers.map(t => t.user.email) }),
  }
}
