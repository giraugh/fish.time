import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 6001
export const LAMBDA_KEY = process.env.LAMBDA_KEY as string
