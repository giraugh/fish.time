import prisma from 'db/client'
import { LAMBDA_KEY } from 'config/env'
import dayjs from 'dayjs'

const longRunningTimers = async (req, res) => {
  // Check lambda key
  if (!req.params.key || req.params.key !== LAMBDA_KEY)
    return res.status(403).json({ error: 'Must have valid ?key param: ' + LAMBDA_KEY, timers: [] })
  
  // Get long running timers
  const longRunningTimers = await prisma.timer.findMany({
    where: {
      endTime: null,
      startTime: { lt: dayjs().subtract(1, 'day').toDate() }
    }
  })

  // Hydrate timer list with user emails
  const timersWithEmails = Promise.all(longRunningTimers
    .map(async timer => ({
      ...timer,
      email: (await prisma.user.findUnique({ where: { id: timer.ownerID }}))?.email
    })))

  return res.status(200).json({ timers: timersWithEmails })
}

export default longRunningTimers