import { Timer as DBTimer } from '@prisma/client'
import client from 'client'
import dayjs from 'dayjs'

export { default as timerMutations } from './mutations'
export { default as timerSubscriptions } from './subscriptions'

export const timerQueries = {
  timer: async (_parent, { id }: { id: number }, { user }) =>
    client.timer.findFirst({ where: { id, ownerID: user.id }}),
  myTimers: async (_parent, _args, { user }) =>
    client.timer.findMany({ where: { ownerID: user.id, endTime: { not: null } }}),
  myCurrentTimer: async (_parent, _args, { user }) =>
    client.timer.findFirst({ where: { ownerID: user.id, endTime: null } })
}

export const Timer = {
  project: async (parent: DBTimer) =>
    client.timer
      .findUnique({ where: { id: parent.id } })
      .project(),
  duration: (parent: DBTimer) =>
    client.timer
      .findUnique({ where: { id: parent.id } })
      .then(timer => timer?.endTime
        ? dayjs(timer?.endTime).diff(timer?.startTime, 'second')
        : dayjs().diff(timer?.startTime, 'second'))
}