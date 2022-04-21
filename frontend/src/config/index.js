const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    BASE_URL: 'http://localhost:3000',
    API: 'http://localhost:6001/graphql',
    WSAPI: 'ws://localhost:6001/graphql',
  },
  production: {
    BASE_URL: 'https://fish.giraugh.xyz',
    API: 'https://aqueduct.fish.giraugh.xyz/graphql',
    WSAPI: 'ws://aqueduct.fish.giraugh.xyz/graphql',
  }
}

export default config[env]

