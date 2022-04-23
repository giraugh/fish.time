import { PrismaClient, Prisma } from '@prisma/client'
import dayjs from 'dayjs'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    id: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2',
    displayName: 'Test User 0',
    email: 'test-user-0@fishtime.xyz',
    clients: {
      create: [{
        id: 0,
        name: 'Test Client 0',
      }]
    }
  },
  {
    id: 'EvNNqhykBKc8mwE28jSiiAh6YX43',
    displayName: 'Test User 1',
    email: 'test-user-1@fishtime.xyz',
    clients: {}
  }
]

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: 'Chores',
    users: {
      create: {
        userID: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2'
      }
    },
  },
  {
    name: 'Assignments',
    client: { connect: { id: 0 }},
    users: {
      create: {
        userID: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2'
      }
    }
  },
  {
    name: 'Other Stuff',
    users: {
      create: {
        userID: 'EvNNqhykBKc8mwE28jSiiAh6YX43'
      }
    }
  }
]

const timerData: Prisma.TimerCreateInput[] = [
  {
    description: 'Bake a cake',
    startTime: dayjs('10/04/2022 12:30').toDate(),
    endTime: dayjs('10/04/2022 13:30').toDate(),
    project: { connect: { id: 1 } },
    owner: { connect: { id: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2' }}
  },
  {
    description: 'Walk the dog',
    startTime: dayjs('10/04/2022 07:30').toDate(),
    endTime: dayjs('10/04/2022 08:30').toDate(),
    project: { connect: { id: 1 } },
    owner: { connect: { id: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2' }}
  },
  {
    description: 'Walk the dog',
    startTime: dayjs('07/04/2022 07:30').toDate(),
    endTime: dayjs('07/04/2022 08:43').toDate(),
    project: { connect: { id: 1 } },
    owner: { connect: { id: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2' }}
  },
  {
    description: 'Read task descriptions',
    startTime: dayjs('07/04/2022 10:24').toDate(),
    endTime: dayjs('07/04/2022 11:08').toDate(),
    project: { connect: { id: 2 } },
    owner: { connect: { id: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2' }}
  },
  {
    description: 'Start on design',
    startTime: dayjs('07/04/2022 11:09').toDate(),
    endTime: dayjs('07/04/2022 11:45').toDate(),
    project: { connect: { id: 2 } },
    owner: { connect: { id: 'xXqeUH4lvxZ2V2JPkId7YBPWAMw2' }}
  },
  {
    description: 'Sort my room',
    startTime: dayjs('07/04/2022 11:09').toDate(),
    endTime: dayjs('07/04/2022 11:45').toDate(),
    project: { connect: { id: 3 } },
    owner: { connect: { id: 'EvNNqhykBKc8mwE28jSiiAh6YX43' }}
  }
]

const main = async () => {
  console.log(`Start seeding users...`)
  await Promise.all(userData.map(data => prisma.user.create({ data })))

  console.log(`Start seeding projects...`)
  await Promise.all(projectData.map(data => prisma.project.create({ data })))

  console.log(`Start seeding timers...`)
  await Promise.all(timerData.map(data => prisma.timer.create({ data })))
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })