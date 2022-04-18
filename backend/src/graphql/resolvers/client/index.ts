import { Client as DBClient } from '@prisma/client'
import client from 'client'

export { default as clientMutations } from './mutations'

export const clientQueries = {
  client: async (_parent, { id }, { user }) =>
    client.client.findFirst({ where: { id, ownerID: user.id }}),
  myClients: async (_parent, _args, { user }) =>
    client.client.findMany({ where: { ownerID: user.id }}),
}

export const Client = {
  projects: async (parent: DBClient) =>
    client.client.findUnique({ where: { id: parent.id }})
      .projects()
}