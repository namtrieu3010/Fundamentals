let input = parseInt(prompt('to input a number: '));
if (input < 3 || isNaN(input)) {
  alert('Please retry again!” ');
} else {
    drawTriangle(input);
}
function drawTriangle(k) {
  let triangle = '';
  let star = '*';
  for (let i = 1; i <= k; i++) {
    triangle += star.repeat(i) + '\n';
  }
  console.log(triangle);
}