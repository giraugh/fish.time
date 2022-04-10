import { pipe, tap } from 'wonka'
import { createClient, dedupExchange } from 'urql'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'
import { offlineExchange } from '@urql/exchange-graphcache'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'

import config from '/src/config'
import { contextExchange } from '/src/utils'
import { createToken } from '/src/auth'

export const errorExchange = ({ forward }) => ops$ => {
  return pipe(
    forward(ops$),
    tap(result => result?.error && console.error(result.error))
  )
}

// Create storage database for offline caching
export const storage = makeDefaultStorage({
  idbName: 'stevent-idb',
  maxAge: 14,
})

// Create offline caching exchange
export const cacheExchange = offlineExchange({
  storage,
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
      fetchOptions: { headers: { authorization: await createToken() } } 
    })),
    errorExchange,
    cacheExchange,
    multipartFetchExchange
  ]
})

export default client