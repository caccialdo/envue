const validators = require("./validators")
const parsers = require("./parsers")

class Environ {
  constructor(name) {
    this.name = name
    this.value = process.env[name]
  }

  validate(validator) {
    validator.call(this, this.value)
    return this
  }

  parse(parser=parsers.identity) {
    const parsedValue = parser.call(this, this.value)
    if (this.secret) {
      parsedValue.toString = () => `***secret:${this.name}***`
    }
    return parsedValue
  }

  required() {
    return this.validate(validators.isRequired)
  }
}

module.exports = function environ(name) {
  return new Environ(name)
}
