const environ = require("../src")

console.log(environ("FOO").required().parse())
