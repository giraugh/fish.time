const env = process.env.REACT_APP_BUILD_ENV || 'development'

const config = {
  development: {
    baseURL: 'http://localhost:3000',
    apiAddress: 'http://localhost:3001',
  },
  production: {
    baseURL: '',
    apiAddress: ''
  }
}

export default config[env]

