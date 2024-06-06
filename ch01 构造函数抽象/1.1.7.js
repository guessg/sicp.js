// SICP JS 1.1.7
function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough_bad(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function is_good_enough(old_guess, new_guess) {
    return abs(old_guess - new_guess) / abs(new_guess) < 0.01;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter_bad(guess, x) {
    return is_good_enough_bad(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), x);
}


function sqrt_iter(guess, x) {
    return is_good_enough(guess, improve(guess, x))
        ? improve(guess, x)
        : sqrt_iter(improve(guess, x), x);
}

console.log(sqrt_iter_bad(1.0, 0.00009));
console.log(sqrt_iter(1.0, 0.00009));