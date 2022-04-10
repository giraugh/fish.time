const env = process.env.REACT_APP_BUILD_ENV || 'development'

const config = {
  development: {
    BASE_URL: 'http://localhost:3000',
    API: 'http://10.0.0.40:6001/graphql'
  },
  production: {
    BASE_URL: '',
    API: ''
  }
}

export default config[env]

