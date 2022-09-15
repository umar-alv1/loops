//1. Write a ts program to print all natural numbers from 1 to n. - using while loop
var num = prompt("enter value of n");
var n = parseInt(num);
var n1 = 0;
while (n1 <= n) {
    n1++;
    console.log(n1);
}
//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
var num = prompt("enter value fo n");
var n = parseInt(num);
while (0 < n) {
    console.log(n);
    n--;
}
//     //3. Write a ts program to print all alphabets from a to z. - using while loop
var ch = 'a';
while (ch <= 'z') {
    console.log(ch);
    ch++;
}
//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
var num2 = 0;
console.log("all even number are follow there under 100");
while (num2 <= 100) {
    if (num2 % 2 == 0) {
        console.log(num2);
    }
    num2++;
}
//5. Write a ts program to print all odd number between 1 to 100.
var num1 = 0;
console.log("all odd number are follow there under 100");
while (num1 <= 100) {
    if (num1 % 2 == 1) {
        console.log(num1);
    }
    num1++;
}
//6. Write a ts program to find sum of all natural numbers between 1 to n.
var num = prompt('enter A positive number');
var n = parseInt(num);
var i = 0;
var sum = 0;
while (i <= n) {
    sum = sum + i;
    i++;
}
console.log('total of natural number b/w', n, ' is', sum);
//7. Write a ts program to find sum of all even numbers between 1 to n.
var num = prompt("Enter any possitive number");
var n = parseInt(num);
var sum = 0;
for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log('sum of all even b/t ', n, "is", sum);
//8. Write a ts program to find sum of all odd numbers between 1 to n.
var num = prompt("enter Any possitive number");
var n = parseInt(num);
var sum = 0;
for (var i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        sum = sum + i;
    }
}
console.log('sum of all odd b/t ', n, "is", sum);
//9. Write a ts program to print multiplication table of any number.
var num = prompt("enter any positive Number");
var n = parseInt(num);
var tabi;
for (var i = 1; i <= 10; i++) {
    tabi = i * n;
    console.log(n, '*', i, '=', tabi);
}
//10. Write a ts program to count number of digits in a number.
var num = prompt("enter a number to know how many digit init");
var n = num.length;
console.log("the length of number is ", n);
//11. Write a ts program to find first and last digit of a number.
var num = prompt("enter any Positive number");
console.log("first digit", num[0]);
var num = num.charAt(num.length - 1);
console.log("the last digit", n);
//12. Write a ts program to find sum of first and last digit of a number.
var num = prompt("enter any positive number");
console.log("first digit", num[0]);
var num = num.charAt(num.length - 1);
console.log("the last digit", n);
var sum = n + num[0];
