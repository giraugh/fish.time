import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import { PubSub } from 'graphql-subscriptions'

import { decodeToken, hydrateUser } from 'middleware'
import schema from './src/graphql/schema'
import { PORT } from './src/config/env'

const app = express()
const pubsub = new PubSub()

// Configure generic middleware
app.use(cors())
app.use(express.json({ limit: '1gb' }))

app.get('/', (req, res) => res.send('🐠 Fish Time Backend'))

// Create graphql route
app.use('/graphql',
  decodeToken,
  hydrateUser,
  graphqlHTTP((req: any) => ({
    schema,
    graphiql: true,
    context: { user: req?.user, pubsub }
  }))
)

const server = app.listen(PORT as number, () => {
  console.log(`🐠 (REST) Now Listening on ${PORT}`)

  const wsServer = new WebSocketServer({
    server,
    path: '/graphql',
  })

  useServer({ schema, context: (ctx, msg, args) => {
    return {
      user: null, //TODO
      pubsub
    }
  }}, wsServer)
  console.log(`🐟 (WS) Now Listening on ${PORT}`)
})