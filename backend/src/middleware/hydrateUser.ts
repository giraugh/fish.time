import prisma from 'db/client'

const hydrateUser = async (req, _, next) => {
  // Use firebase id to get user from DB
  const id = req?.firebaseUser?.uid

  // Get User and add to request
  const user = id
    ? await prisma.user.findUnique({ where: { id } })
    : null
  req.user = user

  // Auth mocking for testing
  if (process.env.NODE_ENV === 'development' && process.env.MOCK_USER_ID) {
    req.user = await prisma.user.findUnique({ where: { id: process.env.MOCK_USER_ID } })
  }

  return next()
}

export default hydrateUser