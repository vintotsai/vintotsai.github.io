function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(`delayed ${delay}s.`)
    }, delay * 1000)
  })
}

(async() => {
  console.log(`Before sleep...`)
  await sleep(2)
  console.log(`After sleep...`)  // ? not executed
})()