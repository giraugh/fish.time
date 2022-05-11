import admin from 'firebase-admin'
import { env, GOOGLE_APPLICATION_CREDENTIALS } from './env'


// Initialise firebase connection
if (env === 'production') {
  admin.initializeApp()
} else {
  admin.initializeApp({
    credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
  })
}

export default admin
