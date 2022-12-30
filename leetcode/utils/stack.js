const MyStack = function () {
  this.list = []
  this.size = 0

  this.push = function (el) {
    this.list.push(el)
    this.size++
  }
  this.pop = function () {
    this.size--
    return this.list.pop()
  }
  this.top = function () {
    return this.list[this.size - 1]
  }
  this.empty = function () {
    return this.size == 0
  }
}

let obj = new MyStack()
obj.push(1)
obj.pop()
console.log(obj.list)
