// practice 1.1

const a = prompt('Please input your number');
const value = parseFloat(a);

if (isNaN(value)) {
    alert('Please input a number');
} else if (parseInt(a) < 0) {
    alert ('Please input a positive number');
} else {
    alert ('Congratulations! You did it');
}

// practice 1.2
const mail = prompt('Please input your email');
let checkMail = mail.indexOf("@");
let lengthMail = mail.length;
let checkFirst = mail[mail.length - 1];
if (checkMail === -1 || lengthMail <= 8 || checkFirst == "@")
 {
    alert("Your email is not valid");
} ;