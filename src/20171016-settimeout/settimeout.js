let start = new Date()
let end = 0
let log = console.log.bind(console)
setTimeout(function() {
  log(new Date() - start)
}, 500)

while (new Date() - start <= 1000) {
  
}