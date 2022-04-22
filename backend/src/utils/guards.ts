import { AuthError } from 'graphql/errors'
import prisma from 'db/client'

type Context = { user: any }
type Filter = (context: Context) => Promise<boolean>
type FilterFactory = (...any: any) => Filter

// Run action only if atleast one filter passes
// Filters are async functions of context
// i.e filters :: [Context -> Promise<Bool>]
export const guard = async (filters: Filter[], context: Context) => {
  // Evaluate each filter factory
  const results = await Promise.all(filters.map(filter => filter(context)))
  const hasPermission = results.some(x => x === true)

  if (!hasPermission) {
    throw new AuthError('Permission denied')
  }
}

// Guard for user is authenticated
export const isAuthenticated: FilterFactory = () => async ({ user }) => !!user

// Guard for logged in user is given user
export const isSelf: FilterFactory = userID => async ({ user }) => user?.id === userID

// Guard for a timer that I am the owner of
export const isMyTimer: FilterFactory = timerID => async ({ user }) =>
  prisma.timer.findUnique({ where: { id: timerID }})
    .then(timer => timer?.ownerID === user.id)

// Guard for a project that I am the owner of
export const isMyProject: FilterFactory = projectID => async ({ user }) =>
  prisma.usersInProject.findFirst({ where: { projectID, userID: user.id, isOwner: true } })
    .then(row => row !== null)

// Guard for a project that has been shared with me (that I don't own)
export const isProjectSharedWithMe: FilterFactory = projectID => async ({ user }) =>
  prisma.usersInProject.findFirst({ where: { projectID, userID: user.id, isOwner: false } })
    .then(row => row !== null)