
let mathMark = parseFloat(prompt('input the Math:'));
let physicalMark = parseFloat(prompt('input the Physical :'));
let chemistryMark = parseFloat(prompt('input the Chemistry:'));
let averageN = 0;
let invalidV =
  isNaN(mathMark) || mathMark < 0 || mathMark > 10 ||
  isNaN(physicalMark) || physicalMark < 0 || physicalMark > 10 ||
  isNaN(chemistryMark) || chemistryMark < 0 || chemistryMark > 10;
if (invalidV) {
  alert('Please input valid number');
} else {
  averageN += (mathMark + physicalMark + chemistryMark) / 3;
  averageN = averageN.toFixed(1);
}
if (averageN >= 8) {
  alert('Your average mark is ' + averageN + '. Your rank is: ' + 'A');
} else if (averageN > 6.5) {
  alert('Your average mark is ' + averageN + '. Your rank is: ' + 'B');
} else if (averageN >= 5) {
  alert('Your average mark is ' + averageN + '. Your rank is: ' + 'C');
} else if (averageN < 5) {
  alert('Your average mark is ' + averageN + '. Your rank is: ' + 'D');
}
