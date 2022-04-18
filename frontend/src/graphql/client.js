import { pipe, tap } from 'wonka'
import { createClient, dedupExchange } from 'urql'
import { gql } from '@urql/core'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'
import { offlineExchange } from '@urql/exchange-graphcache'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'

import config from '/src/config'
import { contextExchange } from '/src/utils'

export const errorExchange = ({ forward }) => ops$ => {
  return pipe(
    forward(ops$),
    tap(result => result?.error && console.error(result.error))
  )
}

// Create storage database for offline caching
export const storage = makeDefaultStorage({
  idbName: 'fish-time-idb',
  maxAge: 14,
})

const cacheUpdates = {
  Mutation: {
    createProject: (result, _args, cache, _info) => {
      const query = gql`{
        myProjects {
          id
        }
      }`
      cache.updateQuery({ query }, data => {
        data.myProjects.push(result.createProject?.project)
        return data
      })
    },
    createClient: (result, _args, cache, _info) => {
      const query = gql`{
        myClients {
          id
        }
      }`
      cache.updateQuery({ query }, data => {
        data.myClients.push(result.createClient?.client)
        return data
      })
    }
  }
}

// Create offline caching exchange
export const cacheExchange = offlineExchange({
  storage,
  updates: cacheUpdates,
  keys: {
    UserPreferences: () => null
  }
})

const client = createClient({
  url: config.API,
  requestPolicy: 'cache-and-network',
  exchanges: [
    dedupExchange,
    contextExchange(async ctx => ({
      ...ctx,
      /* #TODO: fetchOptions: { headers: { authorization: await createToken() } } */
    })),
    errorExchange,
    cacheExchange,
    multipartFetchExchange
  ]
})

export default client