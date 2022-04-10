import express from 'express'
import { graphqlHTTP } from "express-graphql"

import schema from './src/graphql/schema'
import { PORT } from './src/config/env'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`🐠 Now Listening on ${PORT}`)
})