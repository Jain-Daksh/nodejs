const EventEmiiter = require('events')
const event = new EventEmiiter()

event.on('saymyname' , () => {
  console.log("say")
})
event.emit('saymyname')

// const EventEmitter = require('events')
// const event = new EventEmitter();

// event.on('say' , () => {
//   console.log('abc')
// })
// event.emit('say')
