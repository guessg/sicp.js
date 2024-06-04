### 1.1 略

### 1.2

```js

> const a = (5 + 4 + (2 - (3 - (6 + 4/5))));
Uncaught SyntaxError: Identifier 'a' has already been declared
> a
3
> const f = (5 + 4 + (2 - (3 - (6 + 4/5))));
undefined
> f
14.8
> const d = 3 * (6-2)*(2-7)
undefined
> f / d
-0.24666666666666667
> 
```

### 1.3

```js



> function gt(a, b) {
... return a > b ? a : b;
... }

> function lt(a, b) {
... return a > b ? b : a ;
... }

> function square_of_big_two(a, b, c) {
... return square(gt(a,b)) + square(gt(lt(a,b), c));
... }

> square_of_big_two(3,4,2)
25
> square_of_big_two(3,4,5)
41
> square_of_big_two(3,4,3)
25
> square_of_big_two(3,4,4)
32

```

### 1.4 
略

### 1.5
```js
> function p() {
... return p();
... }
undefined
> p()
Uncaught RangeError: Maximum call stack size exceeded
    at p (REPL56:2:1)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
> function test(x, y) {
... return x===0 ? 0 : y;
... }
undefined
> test(0, p())
Uncaught RangeError: Maximum call stack size exceeded
    at p (REPL56:2:1)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
    at p (REPL56:2:8)
> 
```
如果是应用序，则传递 p() 给 y 时候，会进行实参求值， 此时会无限递归，栈溢出。
如果是正则序，则会先完全展开，最后才计算，返回结果 0.
> x === 0 ? 0 : y
> 0 === 0 ? 0 : p()
> 0

