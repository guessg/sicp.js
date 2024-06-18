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

### 1.6

由于 conditional 是一个函数，sqrt_iter 作为实参传递会被执行，进而导致无限递归。

### 1.11

```js
// f(n) = f(n-1) * 2*f(n-2) + 3*f(n-3)

// 递归版本
function f(n) {
    return n < 3
    ? n
    : f(n-1) + 2*f(n-2) + 3 * f(n-3)
}

// 非递归版本
function f_iterative(n) {
    return n < 3
           ? n
           : f_iterative_impl(2, 1, 0, n - 2);
}
function f_iterative_impl(a, b, c, count) {
    return count === 0
           ? a
           : f_iterative_impl(a + 2 * b + 3 * c, a, b, count - 1); // 尾递归
}

f_iterative(5);
```

### 1.12 
```js
function pascal_triangle(i, j) {
    return j == 1 
    ? 1
    : i == j
    ?
    1
    : pascal_triangle(i-1, j-1) + pascal_triangle(i-1, j);
}

> pascal_triangle(2,1)
1
> pascal_triangle(2,2)
1
> pascal_triangle(3,1)
1
> pascal_triangle(3,2)
2
> pascal_triangle(3,3)
1
> pascal_triangle(4,1)
1
> pascal_triangle(4,2)
3
> pascal_triangle(4,3)
3
> pascal_triangle(4,4)
1
> pascal_triangle(5,1)
1
> pascal_triangle(5,2)
4
> pascal_triangle(5,3)
6
> 
```

### 1.13
略

### 1.14
略

### 1.15
```js
> function cube(x) {
... return x * x * x;
... }

> function p(x) {
... return 3*x - 4*cube(x);
... }

> function sine(x) {
... return !(abs(x) > 0.1)
... ? x
... : p(sine(x/3));
... }

> function abs(x) {
... return x > 0 ? x : -x;
... }
undefined
> sine(12.15)
p running
p running
p running
p running
p running
-0.39980345741334
```

阶增长： O(lg(n))

### 1.16

### 1.19
如何证明？


### 1.34
> f(f) ==> f(2) ==> 2(2) ==> 2 不是可调用的函数
