import { Timer as DBTimer } from '@prisma/client'
import prisma from 'db/client'
import dayjs from 'dayjs'
import { guard, isAuthenticated, redact } from 'utils/guards'

export { default as timerMutations } from './mutations'
export { default as timerSubscriptions } from './subscriptions'

export const timerQueries = {
  timer: async (_parent, { id }: { id: number }, context) =>
    guard([isAuthenticated()], context)
    .then(() => prisma.timer.findFirst({ where: { id, ownerID: context.user.id }}))
    .catch(redact),
  myTimers: async (_parent, _args, context) =>
    guard([isAuthenticated()], context)
    .then(() => prisma.timer.findMany({ where: { ownerID: context.user.id, endTime: { not: null } }})),
  myCurrentTimer: async (_parent, _args, context) =>
    guard([isAuthenticated()], context)
    .then(() => prisma.timer.findFirst({ where: { ownerID: context.user.id, endTime: null } }))
}

export const Timer = {
  project: async (parent: DBTimer) =>
    prisma.timer
      .findUnique({ where: { id: parent.id } })
      .project(),
  duration: (parent: DBTimer) =>
    prisma.timer
      .findUnique({ where: { id: parent.id } })
      .then(timer => timer?.endTime
        ? dayjs(timer?.endTime).diff(timer?.startTime, 'second')
        : dayjs().diff(timer?.startTime, 'second'))
}