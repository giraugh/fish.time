import fire from './firebase'

const createToken = async () => {
  const user = fire.auth().currentUser
  return user
    ? `Bearer ${await user.getIdToken()}`
    : null
}

export default createToken