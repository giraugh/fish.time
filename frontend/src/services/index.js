import { apiAddress } from '/src/config'
import axios from 'axios'

export const instance = axios.create({
  baseURL: apiAddress,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json'
  }
})

export * from './timers'
export * from './clients'
export * from './projects'
