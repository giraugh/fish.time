import { instance } from './'

export const getProjects = async () => {
  await new Promise(res => window.setTimeout(res, 300))
  return [{
    id: 'p-abc',
    name: 'Sample Project 1',
    clientID: 'c-abc',
    totalDuration: 60 * 10,
    isShared: false,
  }, {
    id: 'p-def',
    name: 'Sample Project 2',
    clientID: 'c-abc',
    totalDuration: 30,
    isShared: true,
  }, {
    id: 'p-ghi',
    name: 'Sample Project 3',
    clientID: 'c-dfe',
    totalDuration: 60 * 24 * 3,
    isShared: true,
  }]
}

export const newProject = async () => {

} 

export const deleteProject = async () => {

}
