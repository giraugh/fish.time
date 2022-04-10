import { useQuery } from 'urql'

import { GET_USER_QUERY } from '/src/graphql/queries'

// #HACK #TODO
const TEMP_USER_ID = 'test-user-0'

const useAuth = () => {
  const [{ data, fetching }, queryUser] = useQuery({ query: GET_USER_QUERY, variables: { id: TEMP_USER_ID } })
  const user = data?.user

  return {
    user: user,
    loading: fetching,
  }
}

export default useAuth