import { Client as DBClient } from '@prisma/client'
import prisma from 'db/client'
import { guard, isAuthenticated } from 'utils/guards'

export { default as clientMutations } from './mutations'

export const clientQueries = {
  client: async (_parent, { id }, context) =>
    guard([isAuthenticated()], context)
    .then(() => prisma.client.findFirst({ where: { id, ownerID: context.user.id }})),
  myClients: async (_parent, _args, context) =>
    guard([isAuthenticated()], context)
    .then(() => prisma.client.findMany({ where: { ownerID: context.user.id }})),
}

export const Client = {
  projects: async (parent: DBClient) =>
    prisma.client.findUnique({ where: { id: parent.id }})
      .projects()
}