// Credit: kitten (https://gist.github.com/kitten/df34c06e56d6fb0d04159e26f3e12506)

import { pipe, map, mergeMap, fromValue, fromPromise } from 'wonka'

const contextExchange = fn => ({ forward }) => {
  return ops$ =>
    pipe(
      ops$,
      mergeMap(op => {
        const res = fn(op.context)
        
        return pipe(
          res && typeof res.then === 'function'
            ? fromPromise(res)
            : fromValue(res),
          map(x => ({ ...op, context: x }))
        )
      }),
      forward
    )
}

export default contextExchange