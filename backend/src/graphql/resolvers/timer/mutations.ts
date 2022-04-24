import prisma from 'db/client'
import { guard, isAuthenticated, isMyTimer } from 'utils/guards'

const startTimer = (_parent, { input: data }, context) =>
  guard([isAuthenticated()], context).then(async () => {
    const { user, pubsub } = context

    // Do we have a current timer?
    const currentTimer = await prisma.timer.findFirst({ where: { endTime: null }})
    if (currentTimer && false)
      throw new Error('User already has a running timer.')

    // Create the timer
    const { timer } = await prisma.timer
      .create({ data: { projectID: undefined, ...data, ownerID: user.id }})
      .then(timer => ({ timer }))
    
    // Publish new timer on subs
    pubsub.publish('CURRENT_TIMER', { myCurrentTimer: timer })

    return { timer }
  })

const stopTimer = (_parent, { input: { id, ...data } }, context) =>
  guard([isMyTimer(id)], context).then(async () => {
    const { timer } = await prisma.timer
      .update({ where: { id }, data })
      .then(timer => ({ timer }))

    // Publish null timer to reset current timer
    context.pubsub.publish('CURRENT_TIMER', { myCurrentTimer: null  })

    return { timer }
  })

const updateTimer = (_parent, { input: { id, ...data }}, context) =>
  guard([isMyTimer(id)], context).then(() => 
    prisma.timer
      .update({ where: { id }, data})
      .then(timer => ({ timer })))

const deleteTimer = (_parent, { input: { id }}, context) =>
  guard([isMyTimer(id)], context).then(() => 
    prisma.timer
      .delete({ where: { id }})
      .then(timer => ({ timer })))

const timerMutatations = {
  startTimer,
  stopTimer,
  updateTimer,
  deleteTimer,
}

export default timerMutatations