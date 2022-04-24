import prisma from 'db/client'
import { LAMBDA_KEY } from 'config/env'
import dayjs from 'dayjs'

if (!LAMBDA_KEY) {
  throw Error('Expected ENV VAR "LAMBDA_KEY" to be set')
}

const longRunningTimers = async (req, res) => {
  // Check lambda key
  if (!req.query.key || req.query.key != LAMBDA_KEY) {
    return res.status(403).json({ query: req.query, error: 'Must have valid ?key query param', timers: [] })
  }
  
  // Get long running timers
  const longRunningTimers = await prisma.timer.findMany({
    where: {
      endTime: null,
      startTime: { lt: dayjs().subtract(1, 'day').toDate() }
    }
  })

  // Hydrate timer list with user emails
  const timersWithEmails = await Promise.all(longRunningTimers
    .map(async timer => ({
      ...timer,
      user: {
        email: (await prisma.user.findUnique({ where: { id: timer.ownerID }}))?.email
      }
    })))

  return res.status(200).json({ timers: timersWithEmails })
}

export default longRunningTimers