export default class AuthError extends Error {
  extensions: object

  constructor(message) {
    super(message)
    this.extensions = { code: 'AUTH_ERROR' }
  }
}