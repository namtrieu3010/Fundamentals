let input = parseInt(prompt('to input a number: '));
if (input < 3 || isNaN(input)) {
  alert('Please retry again!” ');
} else {
  triangle(input);
}
function triangle(n) {
  let row = '';
  let star = '*';
  let space = ' ';
  for (let i = 1; i <= n; i++) {
    row += space.repeat(n - i) + star.repeat(i) + '\n';
  }
  console.log(row);
}