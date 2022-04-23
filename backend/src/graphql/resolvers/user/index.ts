import { User as DBUser } from '@prisma/client'
import prisma from 'db/client'
import { guard, isSelf, redact } from 'utils/guards'

export { default as userMutations } from './mutations'

export const userQueries = {
  user: async (_parent, { id }: { id: string }, context) =>
    guard([isSelf(id)], context)
    .then(() => prisma.user.findUnique({ where: { id }}))
    .catch(redact)
}

export const User = {
  projects: async (parent: DBUser, { isOwner }: { isOwner: boolean }) =>
    prisma.project
      .findMany({
        where: {
          users: {
            some: {
              isOwner: isOwner ?? undefined,
              userID: parent.id,
            }
          }
        }
      }),
  clients: async (parent: DBUser, _args) =>
    prisma.user
    .findUnique({ where: { id: parent?.id }})
    .clients(),
  timers: async (parent: DBUser, { isOwner }: { isOwner: boolean }) => 
    prisma.timer
      .findMany({
        where: {
          project: {
            users: {
              some: {
                isOwner: isOwner ?? undefined,
                userID: parent?.id
              }
            }
          }
        }
      }),
}