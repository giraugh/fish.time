import { instance } from './'

export const getProjects = async () => {
  return [{
    id: 'p-abc',
    name: 'Sample Project 1',
    clientID: 'c-abc',
    timerDuration: 60 * 10
  }, {
    id: 'p-def',
    name: 'Sample Project 2',
    clientID: 'c-abc',
    timerDuration: 30,
  }, {
    id: 'p-ghi',
    name: 'Sampe Project 3',
    clientID: 'c-dfe',
    timerDuration: 60 * 24 * 3,
  }]
}

export const newProject = async () => {

} 

export const deleteProject = async () => {

}
