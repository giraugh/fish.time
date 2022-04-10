import { Project as DBProject } from '@prisma/client'
import client from 'client'
import dayjs from 'dayjs'

export { default as projectMutations } from './mutations'

export const projectQueries = {
  project: async (_parent, { id }: { id: number }, { user }) =>
    client.project.findFirst({ where: { id, users: { some: { userID: user.id }} }}),
  myProjects: async (_parent, _args, { user }) =>
    client.project.findMany({ where: { users: { some: { userID: user.id } }}}),
}

export const Project = {
  client: async (parent: DBProject) =>
    client.project
      .findUnique({ where: { id: parent.id } })
      .client(),
  timers: async (parent: DBProject) =>
    client.project
      .findUnique({ where: { id: parent.id } })
      .timers(),
  totalDuration: (parent: DBProject) =>
    client.timer
    .findMany({
      where: { project: { id: parent.id } }
    })
    .then(projects => projects
      .map(p => dayjs(p.endTime).diff(p.startTime, 'second'))
      .reduce((a, b) => a + b, 0)
    ),
  isShared: (parent: DBProject) =>
      client.project
        .findUnique({ where: { id: parent.id }})
        .users({ where: { isOwner: false }})
        .then(guests => guests.length > 0)
}