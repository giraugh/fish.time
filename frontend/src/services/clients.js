import { instance } from './'

export const getClients = async () => {
  await new Promise(res => window.setTimeout(res, 300))
  return [{
    id: 'c-abc',
    name: 'Sample Client 1',
  }, {
    id: 'c-dfe',
    name: 'Sample Client 2'
  }]
}

export const newClient = async () => {
} 

export const deleteClient = async () => {

}
