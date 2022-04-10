import client from 'client'

const createProject = async (_parent, { input: data }, { user }) => {
  // Create project
  const project = await client.project.create({ data })

  // Add ourselves as owner
  await client.usersInProject.create({ data: { userID: user.id, projectID: project.id }})

  // Return the project payload
  return { project }
}

const updateProject = async (_parent, { input: { id, ...data }}) =>
  client.project
    .update({ where: { id }, data})
    .then(project => ({ project }))

const deleteProject = async (_parent, { input: { id }}) =>
  client.project
    .delete({ where: { id }})
    .then(project => ({ project }))

const shareProject = async (_parent, { input: { id, userID }}) => 
  client.usersInProject
    .create({ data: { projectID: id, userID } })
    .then(() => client.project.findUnique({ where: { id }}))
    .then(project => ({ project }))

const projectMutatations = {
  createProject,
  updateProject,
  deleteProject,
  shareProject,
}

export default projectMutatations