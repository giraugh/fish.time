import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient({ log: ['warn', 'error']})

prisma.$connect()
  .then(() => console.log('🌊 Connected to database'))
  .catch(e => console.error(`🌵 Failed to connect to database: ${e}`))

export default prisma