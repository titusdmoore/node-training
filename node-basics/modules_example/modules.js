const { john, peter } = require('./names')
const sayHi = require('../utils')
const data = require('../global/alternative-export')

sayHi("Sarah")
sayHi(john)
sayHi( peter )