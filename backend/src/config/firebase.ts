import admin from 'firebase-admin'

// Read config from json (not commited)
const firebaseConfig = require('./firebase_service_account.json')

// Initialise firebase connection
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
})

export default admin
