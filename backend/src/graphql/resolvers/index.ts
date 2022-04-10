import { User, userQueries, userMutations } from './user'
import { Project, projectQueries, projectMutations } from './project'
import { Client, clientQueries, clientMutations } from './client'
import { Timer, timerQueries, timerMutations } from './timer'

const resolvers = {
  Query: {
    ...userQueries,
    ...projectQueries,
    ...clientQueries,
    ...timerQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
    ...clientMutations,
    ...timerMutations,
  },
  User,
  Project,
  Client,
  Timer,
}

export default resolvers