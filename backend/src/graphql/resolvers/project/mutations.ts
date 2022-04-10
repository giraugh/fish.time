import client from 'client'

const createProject = async (_parent, { input: data }) =>
  client.project
    .create({ data })
    .then(project => ({ project }))

const updateProject = async (_parent, { input: { id, ...data }}) =>
  client.project
    .update({ where: { id }, data})
    .then(project => ({ project }))

const deleteProject = async (_parent, { input: { id }}) =>
  client.project
    .delete({ where: { id }})
    .then(project => ({ project }))

const projectMutatations = {
  createProject,
  updateProject,
  deleteProject,
}

export default projectMutatations