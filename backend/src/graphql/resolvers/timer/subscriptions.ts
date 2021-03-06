import prisma from 'db/client'

const myCurrentTimer = {
  subscribe: (_parent, _args, { pubsub }) =>
    pubsub.asyncIterator('CURRENT_TIMER'),
}

export default {
  myCurrentTimer
}