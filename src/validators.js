const { isInt } = require("validator")

const EnvironError = require("./EnvironError")

exports.isRequired = function isRequired(str) {
  if (str === undefined) {
    throw new EnvironError(`Environment variable "${this.name}" is required.`)
  }
}

const isOneOf = exports.isOneOf = function isOneOf(enums) {
  return str => {
    if (!enums.includes(str)) {
      throw new EnvironError(`Environment variable "${this.name}=${this.value}" should be on of: ${enums}.`)
    }
  }
}

exports.isBool = function isBool(str) {
  isOneOf(["true", "TRUE", "1", "false", "FALSE", "0"])(str)
}

exports.isBoolStrict = function isBoolStrict(str) {
  isOneOf(["true", "false"])(str)
}

exports.isInt = function isInt(str) {
  if (!isInt(str)) {
    throw new EnvironError(`Environment variable "${this.name}=${this.value}" is supposed to be an integer.`)
  }
}

// exports.isPositiveInt

// exports.isNegativeInt

// exports.isFloat

// exports.isPositiveFloat

// exports.isNegativeFloat

// exports.isUrl

// exports.isJson

// exports.isJsonObject

// exports.isJsonArray
