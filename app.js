const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data recieved Name: ${name} : ID: ${id}`)
})
customEmitter.on('response', () => {
  console.log(`data recieved 2`)
})

customEmitter.emit('response', 'john', 34)