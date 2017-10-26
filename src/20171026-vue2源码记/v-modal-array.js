// 仿照vuejs源码对数组劫持的原理

var arrayMethod = Object.create(Array.prototype);

['push', 'shift'].forEach(function (method) {
  Object.defineProperty(arrayMethod, method, {
    value: function () {
      console.log('arguments->>', arguments)
      var i = arguments.length
      var args = new Array(i)
      while (i--) {
        args[i] = arguments[i]
      }
      var original = Array.prototype[method];
      var result = original.apply(this, args);
      console.log("已经控制了，哈哈");
      return result;
    },
    enumerable: true,
    writable: true,
    configurable: true
  })
})
var bar = [1, 2]
bar.__proto__ = arrayMethod
bar.push(3, 4, 5) //控制台会打印出 “已经控制了，哈哈”;并且bar里面已经成功的添加了成员 ‘3’

console.log(bar)