import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 6001
export const FIREBASE_SERVICE_ACCOUNT = process.env.FIREBASE_SERVICE_ACCOUNT as string