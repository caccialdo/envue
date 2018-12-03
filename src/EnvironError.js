module.exports = class EnvironError extends Error {
  constructor(message) {
    super(`[environ] ${message}`)
  }
}
