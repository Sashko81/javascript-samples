const a = parseFloat(prompt('enter A'));
const b = parseFloat(prompt('enter B'));
const c = parseFloat(prompt('enter C'));
const d = calcDiscr(a, b, c);
const result = solveQard(a, b, c);
alert(result);

function solveQard(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d === 0) {
        const x = -b / (2 * a);
        return 'We have only one result: x1 = ' + x;
    }
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'We have two results: x1 = ' + x1 + ' , x2 = ' + x2;
    } else if (d < 0) {
        return 'Sorry, the discriminant is less than zero';
    }
}

function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}
