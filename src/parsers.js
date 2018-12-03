const identity = str => str

exports.identity = identity
exports.toInt = str => parseInt(str, 10)
exports.toFloat = str => parseFloat(str, 10)

exports.toArray = (separator=",", mapFn=identity) => str => str.split(separator).map(mapFn)
exports.toObject = str => JSON.parse(str)
