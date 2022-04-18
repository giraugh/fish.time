import client from 'client'

const createUser = async (_parent, { input: data }) => 
  client.user
    .create({ data })
    .then(user => ({ user }))

const updateUser = async (_parent, { input: { id, ...data } }) =>
  client.user
    .update({ where: { id }, data })
    .then(user => ({ user }))

const deleteUser = async (_parent, { input: { id } }) =>
  client.user
    .delete({ where: { id }})
    .then(user => ({ user }))

const userMutatations = {
  createUser,
  updateUser,
  deleteUser
}

export default userMutatations