import firebase from 'firebase/compat/app'
import firebaseConfig from '/src/config/firebase'
import 'firebase/compat/auth'

// Ensure firebase is initialised w/ google
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('An error occurred whilst initialising firebase:', err.stack)
  }
}

export default firebase