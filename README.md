TypeScript Function Generator Fib Demo
======================================

利用function generator实现fib函数。

注意：开始时，我使用的是这样的写法：

```
const c = yield a + b
```

我原以为当我调用`.next()`之后，它会把yield计算出来的值赋给`c`，实际上不是的。

yield后面表达式的值只会当作`.next()`的返回值，而不会赋给`c`。`c`的值只能来自于下一个`.next(x)`调用时传入的参数`x`

也就是说，上面的代码实际上可以理解为：

```
next() {
  return a + b
}

next(x) {
  const c = x;
}
```

```
npm install
npm run demo
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

