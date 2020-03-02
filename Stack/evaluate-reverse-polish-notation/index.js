var evalRPN = function(tokens) {
  let stack = []
  // 每次遇到操作符取前栈内前两个数字进行运算
  // 减法和除法要注意谁被减/除
  // 除法需取整
  for(let t of tokens) {
    switch(t) {
      case '+':
        let a = stack.pop(), b = stack.pop()
        stack.push(a + b)
        break
      case '-': 
        let d = stack.pop(), e = stack.pop()
        stack.push(e - d)
        break
      case '*':
        let f = stack.pop(), g = stack.pop()
        stack.push(f * g)
        break
      case '/': 
        let h = stack.pop(), i = stack.pop()
        let res = i / h < 0 ? Math.ceil(i / h) : Math.floor(i / h)
        stack.push(res)
        break
      default:
        stack.push(parseInt(t))
    }
    console.log(stack)
  }
  return stack[0]
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))