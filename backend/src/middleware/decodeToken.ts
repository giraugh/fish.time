import admin from 'config/firebase'

const decodeToken = async (req, res, next) => {
  // Expect a token
  const header = req.headers.authorization
  if (!header || header === 'Bearer null' || !header.startsWith('Bearer '))
    return next()

  // Decode token
  const idToken = header.replace('Bearer ', '')

  // Verify token
  try {
    req.firebaseUser = await admin.auth().verifyIdToken(idToken)
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    })
  }

  return next()
}

export default decodeToken