import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from "express-graphql"

import schema from './src/graphql/schema'
import { PORT } from './src/config/env'

const app = express()

// Configure generic middleware
app.use(cors())
app.use(express.json({ limit: '1gb' }))

// Create graphql route
app.use('/graphql',
  /* #HACK #TODO */
  ((req:any, res, next) => {
    req.user = {
      id: 'test-user-0'
    }
    next()
  }),
  graphqlHTTP((req: any) => ({
    schema,
    graphiql: true,
    context: { user: req?.user }
  }))
)

app.listen(PORT, () => {
  console.log(`🐠 Now Listening on ${PORT}`)
})