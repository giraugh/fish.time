import client from 'client'

const startTimer = async (_parent, { input: data }, { user, pubsub }) => {
  // Do we have a current timer?
  const currentTimer = await client.timer.findFirst({ where: { endTime: null }})
  if (currentTimer && false)
    throw new Error('User already has a running timer.')

  // Create the timer
  const { timer } = await client.timer
    .create({ data: { projectID: undefined, ...data, ownerID: user.id }})
    .then(timer => ({ timer }))
  
  // Publish new timer on subs
  pubsub.publish('CURRENT_TIMER', { myCurrentTimer: timer })

  return { timer }
}

const stopTimer = async (_parent, { input: { id, ...data } }, context) => {
  const { timer } = await client.timer
    .update({ where: { id }, data })
    .then(timer => ({ timer }))

  // Publish null timer to reset current timer
  context.pubsub.publish('CURRENT_TIMER', { myCurrentTimer: null  })

  return { timer }
}

const updateTimer = async (_parent, { input: { id, ...data }}) =>
  client.timer
    .update({ where: { id }, data})
    .then(timer => ({ timer }))

const deleteTimer = async (_parent, { input: { id }}) =>
  client.timer
    .delete({ where: { id }})
    .then(timer => ({ timer }))

const timerMutatations = {
  startTimer,
  stopTimer,
  updateTimer,
  deleteTimer,
}

export default timerMutatations