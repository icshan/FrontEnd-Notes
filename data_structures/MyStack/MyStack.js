 /**
   * 封装一个栈类
  */
  function MyStack(){
    this.items = [];
  }
  // 1、将元素压入栈
  MyStack.prototype.push = function (element) {
    this.items = push(element)
  }
  // 2、从栈中取出元素
  MyStack.prototype.pop = function () {
    return this.items.pop()
  }
  // 3、查看一下栈顶元素
  MyStack.prototype.peek = function () {
    return this.items[ this.items.length - 1 ]
  }
  // 4、判断栈是否为空
  MyStack.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  // 5、获取栈中元素的个数
  MyStack.prototype.size = function () {
    return this.items.length
  }
  // 6、toString方法
  MyStack.prototype.toString = function () {
    return this.items.join('')
  }

  // 栈的使用
  var s = new MyStack()

  s.push(1)
  s.push(2)
  s.push(3)
  s.push(4)
  s.push(5)

  console.log(s)