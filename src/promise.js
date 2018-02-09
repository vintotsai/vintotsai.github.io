var p = new Promise(function (resolve, reject) {
  console.log(1)
  setTimeout(function () {
    console.log('1S之后...')

    console.log(2)
    resolve()
    console.log(22)
  }, 1000);
  console.log(222)
})

p.then(() => {
  console.log(3)
})

console.log(4)