import { Client as DBClient } from '@prisma/client'
import prisma from 'db/client'

export { default as clientMutations } from './mutations'

export const clientQueries = {
  client: async (_parent, { id }, { user }) =>
    prisma.client.findFirst({ where: { id, ownerID: user.id }}),
  myClients: async (_parent, _args, { user }) =>
    prisma.client.findMany({ where: { ownerID: user.id }}),
}

export const Client = {
  projects: async (parent: DBClient) =>
    prisma.client.findUnique({ where: { id: parent.id }})
      .projects()
}