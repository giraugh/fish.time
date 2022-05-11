import path from 'path'
import { config } from 'dotenv'

export const env = process.env.NODE_ENV || 'development'

// Load env
config()
if (env === 'production') {
  config({ path: path.resolve(process.cwd(), '.env.production'), override: true })
  config({ path: path.resolve(process.cwd(), 'prod.env'), override: true })
}

export const PORT = process.env.PORT || 6001
export const LAMBDA_KEY = process.env.LAMBDA_KEY as string
export const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS ?? './firebase_service_account.json'
