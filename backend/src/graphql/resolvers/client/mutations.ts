import client from 'client'

const createClient = async (_parent, { input: data }) =>
  client.client
    .create({ data })
    .then(client => ({ client }))

const updateClient = async (_parent, { input: { id, ...data }}) =>
  client.client
    .update({ where: { id }, data})
    .then(client => ({ client }))

const deleteClient = async (_parent, { input: { id }}) =>
  client.client
    .delete({ where: { id }})
    .then(client => ({ client }))

const clientMutatations = {
  createClient,
  updateClient,
  deleteClient,
}

export default clientMutatations