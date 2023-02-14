function PromisePolyfill(executor) {
  let onResolve, onReject

  function resolve(x) {
    onResolve(x)
  }
  function reject(x) {
    onReject(x)
  }
  this.then = function (cb) {
    onResolve = cb
    return this
  }
  this.catch = function (cb) {
    onReject = cb
    return this
  }
  executor(resolve, reject)
}

const a = new PromisePolyfill((res, rej) => {
  setTimeout(() => {
    res('hello')
  }, 1000)
})
a.then((res) => console.log(res))
