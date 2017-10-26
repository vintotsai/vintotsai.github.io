
let o = {
  name: 'xx',
  age: 1
}

Object.defineProperty(o, 'name', {
  get: function(){
    console.log('get init')
  },
  set: function() {
    console.log('set init')
  }
})

console.log(o.name) //get init