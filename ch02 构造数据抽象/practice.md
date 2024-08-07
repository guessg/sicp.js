# 2.6

```js
> function add_1(n) {
... return f => x => f(n(f)(x));
... }
undefined
> const one = f => x => f(x);
undefined
> const two = f => x => f(f(x));
undefined
> 
> function plus(n, m) {
...     return f => x => n(f)(m(f)(x));
... }
undefined
> 
> // testing
undefined
> 
> const three = plus(one, two);
undefined
> 
> function church_to_number(c) {
...     return c(n => n + 1)(0);
... }
undefined
> church_to_number(three);
3

```

## 展开过程描述(generated by ChatGPT)

To determine the output of `church_to_number(three)`, we need to follow the steps of the Church encoding and function application. Let's expand `church_to_number(three)` step-by-step and calculate the final result.

Here are the definitions given in the question:

```javascript
const one = f => x => f(x);
const two = f => x => f(f(x));

function plus(n, m) {
    return f => x => n(f)(m(f)(x));
}

// testing

const three = plus(one, two);

function church_to_number(c) {
    return c(n => n + 1)(0);
}
church_to_number(three);
```

### Step 1: Define `plus`

The function `plus` is defined as:

```javascript
function plus(n, m) {
    return f => x => n(f)(m(f)(x));
}
```

This function takes two Church numerals `n` and `m` and returns their sum as a Church numeral.

### Step 2: Compute `three`

We compute `three` as `plus(one, two)`:

```javascript
const three = plus(one, two);
```

Expanding this:

```javascript
const three = f => x => one(f)(two(f)(x));
```

### Step 3: Expand `one(f)`

Recall that `one` is:

```javascript
const one = f => x => f(x);
```

Thus, applying `one(f)`:

```javascript
one(f) = f => x => f(x);
```

### Step 4: Apply `one(f)` to `two(f)(x)`

Now, we need to substitute `one(f)` in the definition of `three`:

```javascript
three = f => x => (f => x => f(x))(f)(two(f)(x));
```

This simplifies to:

```javascript
three = f => x => f(two(f)(x));
```

### Step 5: Expand `two(f)`

Recall that `two` is:

```javascript
const two = f => x => f(f(x));
```

### Step 6: Apply `two(f)(x)`

Now, we need to substitute `two(f)` in the definition of `three`:

```javascript
three = f => x => f((f => x => f(f(x)))(f)(x));
```

This simplifies to:

```javascript
three = f => x => f(f(f(x)));
```

So, the Church numeral `three` is:

```javascript
const three = f => x => f(f(f(x)));
```

### Step 7: Convert `three` to a number

Now, we apply `church_to_number` to `three`:

```javascript
function church_to_number(c) {
    return c(n => n + 1)(0);
}
church_to_number(three);
```

Expanding this:

```javascript
church_to_number(three) = (f => x => f(f(f(x))))(n => n + 1)(0);
```

### Step 8: Apply the function

We need to apply the function step-by-step:

1. Apply `f` to `x`, where `f` is `(n => n + 1)` and `x` is `0`:

   ```javascript
   (n => n + 1)(0) => 0 + 1 => 1
   ```
2. Apply `f` again to the result:

   ```javascript
   (n => n + 1)(1) => 1 + 1 => 2
   ```
3. Apply `f` once more to the result:

   ```javascript
   (n => n + 1)(2) => 2 + 1 => 3
   ```

### Final Output

Therefore, the output of `church_to_number(three)` is `3`.

# 2.17
```js
// Type your program in here!
pair(1, pair(2, pair(3, 4)));

const one_to_five = list(1, 2,3,4,5);
head(one_to_five);
head(tail(one_to_five));

pair(0, one_to_five);

function list_ref(l, n) {
    return n === 0 
    ? head(l)
    : list_ref(tail(l), n-1);
}

const squares = list(1,4,9,16);

list_ref(squares, 3);

function length(l) {
    return is_null(l)
    ? 0
    : 1 + length(tail(l));
}

length(squares);

function length_iter_version(items) {
    function _iter(a, count) {
        return is_null(a) 
        ? count
        : _iter(tail(a), count+1);
    }
    
    return _iter(items, 0);
}

length_iter_version(squares);

function append(list1, list2) {
    return is_null(list1)
    ? list2
    : pair(head(list1), append(tail(list1), list2));
}

const odds = list(1,3,5,7);

display_list(append(squares, odds));
display_list(append(odds, squares));


function last_pair(items) {
    return is_null(tail(items))
    ? items
    : last_pair(tail(items));
}

display_list(last_pair(list(23, 72, 149, 34)));
```

# 2.18
```js

function reverse_bad_case(items) {
    return is_null(items)
    ? items
    : pair(reverse(tail(items)), head(items));
}


function reverse(items) {
    return is_null(items)
           ? null
           : append(reverse(tail(items)),
	            pair(head(items), null));
}

display_list(reverse_bad_case(list(1, 4, 9, 16, 25))); // [[25, [16, [9, [4, null]]]], 1] // [list(25, 16, 9, 4), 1]
display_list(reverse(list(1,4,9,16,25))); // [25, [16, [9, [4, [1, null]]]]] // list(25, 16, 9, 4, 1)
```

# 2.20
> curry
```js
function plus_curried(x) {	    
    return y => x + y;
}

function brooks(f, items) {
    return is_null(items)
           ? f
           : brooks(f(head(items)), tail(items));
}

function brooks_curried(items) {
    return brooks(head(items), tail(items));
}

brooks_curried(list(brooks_curried,
                    list(brooks_curried, 
                         list(plus_curried, 3, 4))));
                         

```