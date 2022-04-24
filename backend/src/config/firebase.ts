import admin from 'firebase-admin'
import { FIREBASE_SERVICE_ACCOUNT } from './env'

// We must have a config
if (!FIREBASE_SERVICE_ACCOUNT)
  throw Error('Expected FIREBASE_CONFIG env var to be set')

// Read JSON string of service from env
const firebaseConfig = JSON.parse(FIREBASE_SERVICE_ACCOUNT)

// Initialise firebase connection
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
})

export default admin