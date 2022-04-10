import { Client as DBClient } from '@prisma/client'
import client from 'client'

export { default as clientMutations } from './mutations'

export const clientQueries = {
  client: async (_parent, { id }) =>
    client.client.findUnique({ where: { id }})
}

export const Client = {
  projects: async (parent: DBClient) =>
    client.client.findUnique({ where: { id: parent.id }})
      .projects()
}