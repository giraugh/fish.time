import { pipe, tap } from 'wonka'
import { createClient, dedupExchange, subscriptionExchange } from 'urql'
//import { createClient as createWSClient } from 'graphql-ws'
import { gql } from '@urql/core'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'
import { offlineExchange } from '@urql/exchange-graphcache'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'

import config from '/src/config'
import { contextExchange } from '/src/utils'
import { createToken } from '/src/auth'

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
    stopTimer: (result, _args, cache, _info) => {
      const query = gql`{
        myTimers {
          id
        }
      }`
      cache.updateQuery({ query }, data => {
        data.myTimers.push(result.stopTimer?.timer)
        return data
      })
    },
    deleteTimer: (result, _args, cache, _info) => {
      const query = gql`{
        myTimers {
          id
        }
      }`
      cache.updateQuery({ query }, data => {
        data.myTimers = data.myTimers.filter(t => t.id !== result.deleteTimer?.timer.id)
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


// Create offline caching exchange
export const cacheExchange = offlineExchange({
  storage,
  updates: cacheUpdates,
  keys: {
    UserPreferences: () => null
  }
})

// // Web socket client
// const wsClient = createWSClient({
//   url: config.WSAPI,
// })
// 
// const subExchange = subscriptionExchange({
//   forwardSubscription: operation => ({
//     subscribe: sink => ({
//       unsubscribe: wsClient.subscribe(operation, sink),
//     }),
//   })
// }) 

const client = createClient({
  url: config.API,
  requestPolicy: 'cache-and-network',
  exchanges: [
    dedupExchange,
    contextExchange(async ctx => ({
      ...ctx,
      fetchOptions: { headers: { authorization: await createToken() } } 
    })),
    errorExchange,
    cacheExchange,
//    subExchange,
    multipartFetchExchange
  ]
})

export default client