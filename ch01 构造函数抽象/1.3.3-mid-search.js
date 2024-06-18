function abs(x) {
    return x >= 0 ? x : -x;
}

function positive(x) {
    return x > 0;
}

function negative(x) {
    return x < 0;
}

function zero(x) {
    return x === 0;
}

function avg(a, b) {
    return (a + b) / 2;
}

function close_enough(x, y) {
    return abs(x - y) < 0.001;
}

function search(f, neg_point, pos_point) {
    const midpoint = avg(neg_point, pos_point);

    if (close_enough(neg_point, pos_point)) {
        return midpoint;
    }

    const test_value = f(midpoint);
    return zero(test_value)
        ? midpoint
        : positive(test_value)
            ? search(f, neg_point, midpoint)
            : search(f, midpoint, pos_point);
}