const EventEmiiter = require('events')
const event = new EventEmiiter()

event.addListener('message' , (err,msg) => {
  if (err) {
    console.log("err" )
  } else {
    console.log("msg" )
  }
 
})


event.emit('message')