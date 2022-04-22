import { useEffect } from 'react'
import { useQuery } from 'urql'
import create from 'zustand'

import { fire } from '/src/auth'
import { GET_USER_QUERY } from '/src/graphql/queries'

const useUserStore = create(set => ({
  signingUp: false,
  fireState: {fireLoaded: false, fireUser: null},
  setFireState: fireState => set({ fireState }),
  setSigningUp: signingUp => set({ signingUp }),
}))

const useAuth = () => {
  const { fireState, setFireState, signingUp, setSigningUp } = useUserStore()
  const {fireLoaded, fireUser} = fireState
  const [{ data, fetching }, queryUser] = useQuery({ query: GET_USER_QUERY, pause: fireUser === null || signingUp, variables: { id: fireUser?.uid } })
  const user = data?.user

  // Log user in w/ firebase
  const signIn = (email, password) => {
    return fire.auth().signInWithEmailAndPassword(email, password)
  }

  // Log user out w/ firebase
  const signOut = () => {
    setFireState({ fireLoaded: true, fireUser: null })
    return fire.auth().signOut()
  }

  // When the firebase auth state changes, get the user from the backend
  useEffect(() => {
    return fire.auth().onAuthStateChanged(fireUser => {
      setFireState({fireLoaded: true, fireUser })
    })
  }, [queryUser])

  return {
    user: fireUser ? user : null,
    loading: fetching || !fireLoaded || (fireUser && !data),
    signIn,
    signOut,
    setSigningUp,
  }
}

export default useAuth