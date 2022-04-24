import prisma from 'db/client'

const createClient = async (_parent, { input: data }, { user }) =>
  prisma.client
    .create({ data: { ...data, ownerID: user.id } })
    .then(client => ({ client }))

const updateClient = async (_parent, { input: { id, ...data }}) =>
  prisma.client
    .update({ where: { id }, data})
    .then(client => ({ client }))

const deleteClient = async (_parent, { input: { id }}) =>
  prisma.client
    .delete({ where: { id }})
    .then(client => ({ client }))

const clientMutatations = {
  createClient,
  updateClient,
  deleteClient,
}

export default clientMutatations