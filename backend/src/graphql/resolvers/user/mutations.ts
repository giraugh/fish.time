import prisma from 'db/client'
import { guard, isSelf } from 'utils/guards'

const createUser = async (_parent, { input: data }) => /* TODO: check that firebase user exists */
  prisma.user
    .create({ data })
    .then(user => ({ user }))

const updateUser = async (_parent, { input: { id, ...data } }, context) =>
  guard([isSelf(id)], context)
  .then(() => prisma.user
    .update({ where: { id }, data })
    .then(user => ({ user })))

const deleteUser = async (_parent, { input: { id } }, context) =>
  guard([isSelf(id)], context)
  .then(() => prisma.user
    .delete({ where: { id }})
    .then(user => ({ user })))

const userMutatations = {
  createUser,
  updateUser,
  deleteUser
}

export default userMutatations