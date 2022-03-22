// practice 4.1

const title = prompt('Please input a number from 1 to 7');
const number = parseInt(title);

if(isNaN(number)){
    alert('Please input a number from 1 to 7');
}else if (title == 1 ){
    alert('Sunday');
}else if (title == 2){
    alert('Monday');
}else if (title == 3 ){
    alert('Tuesday');
}else if (title == 4){
    alert('Wednesday');
}else if (title == 5 ){
    alert('Thursday');
}else if (title == 6){
    alert('Friday');
}else if (title == 7 ){
    alert('Saturday');
}else{
    alert('Please input a number from 1 to 7');
}

// practice 4.2
const input = prompt('Please input a number from 1 to 12');
const num = parseInt(input);

if(isNaN(num)){
    alert('Please input a number from 1 to 12');
}else if (input == 1 ){
    alert('January');
}else if (input == 2){
    alert('February');
}else if (input == 3 ){
    alert('March');
}else if (input == 4){
    alert('April');
}else if (input == 5 ){
    alert('May');
}else if (input == 6){
    alert('June');
}else if (input == 7 ){
    alert('July');
}else if (input == 8 ){
    alert('August');
}else if (input == 9){
    alert('September');
}else if (input == 10 ){
    alert('October');
}else if (input == 11){
    alert('November');
}else if (input == 12 ){
    alert('December');
}else{
    alert('Please input a number from 1 to 12');
}
