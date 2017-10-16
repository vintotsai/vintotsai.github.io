var a = 1;
var obj = {
  a: 2,
  test: function () {
    setTimeout(function () {
      console.log(this.a)
    }.bind(this), 0)
    // }, 0)
  }
}

obj.test()