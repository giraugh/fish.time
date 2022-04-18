const env = process.env.REACT_APP_BUILD_ENV || 'development'

const config = {
  development: {
    BASE_URL: 'http://localhost:3000',
    API: 'http://localhost:6001/graphql',
    WSAPI: 'ws://localhost:6001/graphql',
  },
  production: {
    BASE_URL: '',
    API: '',
    WSAPI: '',
  }
}

export default config[env]

