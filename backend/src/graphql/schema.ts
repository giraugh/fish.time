import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive'

import resolvers from './resolvers'

// Read GQL files
const gqlFiles = readdirSync(join(__dirname, './typedefs'))
const schemaText = gqlFiles
  .map(fileName => join(__dirname, './typedefs', fileName))
  .map(filePath => readFileSync(filePath, { encoding: 'utf8' }))
  .join('\n')

// Create schema
let schema = makeExecutableSchema({
  typeDefs: [constraintDirectiveTypeDefs, schemaText],
  resolvers,
})

// Add directives
schema = constraintDirective()(schema)

export default schema