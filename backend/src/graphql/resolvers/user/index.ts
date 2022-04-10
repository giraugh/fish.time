import { User as DBUser } from '@prisma/client'
import client from 'client'

export { default as userMutations } from './mutations'

export const userQueries = {
  user: async (_parent, { id }: { id: string }) =>
    client.user.findUnique({ where: { id }})
}

export const User = {
  projects: async (parent: DBUser, { isOwner }: { isOwner: boolean }) =>
    client.user
      .findUnique({ where: { id: parent?.id } })
      .projects({ where: { isOwner } }),
  clients: async (parent: DBUser) =>
    client.user
      .findUnique({ where: { id: parent?.id }})
      .clients(),
  timers: async (parent: DBUser, { isOwner }: { isOwner: boolean }) => 
    client.timer
      .findMany({
        where: {
          project: {
            users: {
              some: {
                isOwner,
                userID: parent?.id
              }
            }
          }
        }
      }),
}