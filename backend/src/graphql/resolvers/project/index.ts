import { Project as DBProject } from '@prisma/client'
import prisma from 'db/client'
import dayjs from 'dayjs'
import { guard, isAuthenticated, isMyProject, isProjectSharedWithMe, redact } from 'utils/guards'

export { default as projectMutations } from './mutations'

export const projectQueries = {
  project: async (_parent, { id }: { id: number }, context) =>
    guard([isMyProject(id), isProjectSharedWithMe(id)], context)
    .then(() => prisma.project.findFirst({ where: { id, users: { some: { userID: context.user.id }} }}))
    .catch(redact),
  myProjects: async (_parent, _args, context) =>
    guard([isAuthenticated()], context)
    .then(() => prisma.project.findMany({ where: { users: { some: { userID: context.user.id } }}})),
}

export const Project = {
  client: async (parent: DBProject) =>
    prisma.project
      .findUnique({ where: { id: parent.id } })
      .client(),
  timers: async (parent: DBProject) =>
    prisma.project
      .findUnique({ where: { id: parent.id } })
      .timers(),
  totalDuration: (parent: DBProject) =>
    prisma.timer
    .findMany({
      where: { project: { id: parent.id } }
    })
    .then(projects => projects
      .map(p => p.endTime ? dayjs(p.endTime).diff(p.startTime, 'second') : 0)
      .reduce((a, b) => a + b, 0)
    ),
  isShared: (parent: DBProject) =>
      prisma.project
        .findUnique({ where: { id: parent.id }})
        .users({ where: { isOwner: false }})
        .then(guests => guests.length > 0)
}