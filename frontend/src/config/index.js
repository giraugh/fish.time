const env = process.env.REACT_APP_BUILD_ENV || 'development'

const config = {
  development: {
    BASE_URL: 'http://localhost:3000',
    API: 'http://localhost:6001/graphql'
  },
  production: {
    BASE_URL: '',
    API: ''
  }
}

export default config[env]

