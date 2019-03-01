const a = parseFloat (prompt('enter A'));
const b = parseFloat (prompt('enter B'));
const c = parseFloat (prompt('enter C'));
const d = calcDiscr(a, b, c);
// вирішення квадратного рівняння
       const x1 = (- b + Math.sqrt(d))/ (2 * a);
       const x2 = (- b - Math.sqrt(d))/ (2 * a);
// розрахунок дискримінанта       
function calcDiscr (a, b, c) {
        return b*b - 4*a*c;
}
document.write('Value of Discriminant is: ' + d + ';');
document.write('Value of x1 is: ' + x1 + ';Value x2 is:' + x2);
// вийшло вирішення задачки тільки з функцією до розрахунку дискримінанту, але скріпт вирішує квадратне рівняння вірно