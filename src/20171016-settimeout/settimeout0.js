let log = console.log.bind(console)
let start = new Date()

setTimeout(function() {
  log('timelag->',new Date()-start)
}, 0)
