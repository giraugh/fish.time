import prisma from 'db/client'
import { guard, isMyProject } from 'utils/guards'

const createProject = async (_parent, { input: data }, { user }) => {
  // Create project
  const project = await prisma.project.create({ data })

  // Add ourselves as owner
  await prisma.usersInProject.create({ data: { userID: user.id, projectID: project.id, isOwner: true }})

  // Return the project payload
  return { project }
}

const updateProject = async (_parent, { input: { id, ...data }}, context) =>
  guard([isMyProject(id)], context)
  .then(() => prisma.project
    .update({ where: { id }, data})
    .then(project => ({ project })))

const deleteProject = async (_parent, { input: { id }}, context) =>
  guard([isMyProject(id)], context)
  .then(() => prisma.project
    .delete({ where: { id }})
    .then(project => ({ project })))

const shareProject = async (_parent, { input: { id, userID }}, context) => 
  guard([isMyProject(id)], context)
  .then(() => prisma.usersInProject
    .create({ data: { projectID: id, userID } })
    .then(() => prisma.project.findUnique({ where: { id }}))
    .then(project => ({ project })))

const projectMutatations = {
  createProject,
  updateProject,
  deleteProject,
  shareProject,
}

export default projectMutatations