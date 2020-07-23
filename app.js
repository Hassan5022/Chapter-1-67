//  Chapter # 01

/*  1. Write a script to greet your website visitor using JS alert box.
 
 alert("Hello, Welcome to my website!");
 */

/* 2. Write a script to display following message on your web page:
 
 alert("Error! Please enter a valid password");
 */

/* 3. Write a script to display following message on your web page: (Hint : Use line break)

 alert("Welcome to JS Land..." + "\n" + "Happy Coding");
 */

/*  4. Write a script to display following messages in sequence:

alert("Welcome to JS Land...");
alert("Happy Coding!");
 */

/* 5. Generate the following message through browser’s developer console:

console.log(alert("Hello... I can run JS through my web browser's console")); 
 */

/*  6. Make use of alerts in your new/existing HTML & CSS project.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5</title>
</head>
<body onload="showAlert()">
    <script>
        function showAlert() {
          alert ("Hello world!");
        }
    </script>
</body>
</html> */

/* 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
a. Head
b. Body (before your page’s HTML)
c. Body (inside your page’s HTML)
d. Body (after your page’s HTML)

// a.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5</title>
    <script>
        function showAlert() {
          alert ("Hello world!");
        }
    </script>
</head>
<body onload="showAlert()">
    
</body>
</html> */

// b, c, d.

/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5</title>
</head>
<body onload="showAlert()">
     <script>
        function showAlert() {
          alert ("Hello world!");
        }
    </script>
</body>
</html> */

// Chapter # 02

/* 1. Declare a variable called username.

 var username;
 */

/*  2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Hassan Ahmed";
 */

/* 3. Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box. 
 
// a)
var titledMessage;

// b)
titledMessage = "Hello, World!";
 
// c)
alert(titledMessage);
*/

/* 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = "Jhone Doe";
var age = 15;
var course = "Certified Mobile Applocation Development";
alert(name);
alert(age + " years old");
alert(course);
*/

/* 5. Write a script to display the following alert using one JS variable: 

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);
*/

/* 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

var email = "hassanahmed5022@gmail.com";
alert("My email address is " + email);
*/

/* 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following
message in an alert box: 

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);
*/

/* 8. Write a script to display this in browser through JS

 document.write("Yah! I can write HTML content through JavaScript");
*/

/* 9. Store following string in a variable and show in alert and
browser through JS
“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(str);
alert(str);
*/

// Chapter # 03

/* 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

 var age = 21;
 alert("I am " + age + " years old");
*/

 /* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.
 */
 
 /* 3. Declare a variable called birthYear & assign to it your
 birth year. Show the following message in your browser:
 
 var birthYear;
 birthYear = 1999;
 alert("My birth year is " + birthYear + "\n" + "Data type of my declared variable is " + typeof(birthYear));

 */

 /* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to order
Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

 var visitorName = "Doe"; 
 var productTitle = "T-shirts";
 var quanitiy = 5;
 document.write(visitorName + " ordered " + quanitiy + " " + productTitle + " on XYZ Clothing store.");
 */

 // Chapter # 04

 /* 1. Declare 3 variables in one statement.

 var var1 , var2, var3;
 */

 /* 2. Declare 5 legal & 5 illegal variable names.

 var name, $fname, age, _address, city;
 var .name, -fname, 2age, addres's, ,city;
 */

 /* 3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________

 // a)
 document.write("<h1>Rules for naming JS variables</h1>");
 // b)
 document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable <br>");
 // c)
 document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>");
 // d)
 document.write("Variable names are case sensitive <br>");
 // e)
 document.write("Variable names should not be JS keyword <br>");
 */

 // Chapter # 05

 /* 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

 var num1, num2, sum;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 sum = num1+num2;
 document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
 */

 /* 2. Repeat task1 for subtraction, multiplication, division & modulus.

 var num1, num2, dif;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 dif = num1-num2;
 document.write("Difference of " + num1 + " and " + num2 + " is " + dif);

 var num1, num2, mul;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 mul = num1*num2;
 document.write("Product of " + num1 + " and " + num2 + " is " + mul); 

 var num1, num2, div;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 div = num1 / num2;
 document.write("Division of " + num1 + " and " + num2 + " is " + div);

 var num1, num2, mod;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 mod = num1 % num2;
 document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);
*/

// Task 3

/* 
 var num;
 document.write("Value after variable declation is: " + num + "<br>");
 num = 5;
 document.write("Initial value is: " + num + "<br>");
 num++;
 document.write("Value after increment is: " + num + "<br>");
 num += 7;
 document.write("Value after addition is: " + num + "<br>");
 num--;
 document.write("Value after decrement is: " + num + "<br>");
 num %= 3;
 document.write("The remainder is: " + num); 
 */

 // Task 4
 
 /* 
 var ticketCost = 600, quantity = 5;
 var totalCost = ticketCost * quantity;
 document.write("Total cost to buy " + quantity + " tickets to a movie is " + totalCost + "PKR");
 */

 // Task 5

/*  var num = +prompt("Enter number:");

 document.write("Table of " + num + "<br>");
 for (let index = 1; index <= 10; index++) {
     document.write(num + " x " + index + " = " + num*index + "<br>");
 } */

 // Task 6

/*  var celcius = 25;
 var fahrenheit = (celcius * 9 / 5) + 32;
 document.write(celcius + "&degC is " + fahrenheit + "&degF <br>");

 var fahrenheit = 70;
 var celcius = (fahrenheit - 32) * 5 / 9;
 document.write(fahrenheit + "&degF is " + celcius + "&degC"); */

 // Task 7

/*  document.write("<h1>Shopping Cart</h1>");
 var item_1st_price = 650;
 var quanitiy_1st_item = 3;
 var item_2nd_price = 100;
 var quanitiy_2nd_item = 7;
 var shippingCharges = 100;
 var totalCost = (item_1st_price * quanitiy_1st_item) + (item_2nd_price * quanitiy_2nd_item) + shippingCharges;
 document.write("Total cost of your order is " + totalCost); 
 */

 // Task 8

 /* var totalMarks = 1100, marksObtained = 870;
 var per = (marksObtained / totalMarks) * 100;
 document.write("<h1>Marks Sheet</h1>");
 document.write(totalMarks + "<br>");
 document.write(marksObtained + "<br>");
 document.write("Percentage " + per + "%");
  */

 // Task 9

 /* var dollars = 10, riyals = 25;
 var rupees = (dollars * 104.80) + (riyals * 28);
 document.write("<h1>Currency in PKR</h1>");
 document.write("Total Currency in PKR: " + rupees);
 */

 // Task 10

 /* var num = 5;
 num = ((num + 5) * 10) / 2;
 */
 
 // Task 11

 /* var currentYear = 2020, birthYear = 1999;
 var age = currentYear - birthYear;
 document.write("<h1>Age Calculator</h1>");
 document.write("Current Year " + currentYear + "<br>");
 document.write("Birth Year " + birthYear + "<br>");
 document.write("Your Age " + age);
 */

 // Task 12

/* 
 var radius = 20;
 var circumference = 2 * Math.PI * radius;
 var area = Math.PI * Math.pow(radius, 2);
 document.write("<h1>The Geametrizer</h1>");
 document.write("Radius of a circle: " + radius + "<br>");
 document.write("The circumference is: " + circumference + "<br>");
 document.write("The area is: " + area); 
 */

 // Task 13

 /* 
 var snack = "chocolate chip", curAge = 21, amount = 3, maxAge = 65;
 var total = (maxAge - curAge) * amount;
 document.write("<h1>The Life Time Supply Calculator</h1>");
 document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge); 
 */

 // Chapters 6-9

 // Task 1

 /*
 var a = 10;
 document.write("Result:<br>");
 document.write("The value of a is: " + a + "<br>");
 document.write("..................................<br>");
 document.write("<br>The value of ++a is: " + (++a) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("<br>The value of a++ is: " + (a++) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("<br>The value of --a is: " + (--a) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("<br>The value of a-- is: " + (a--) + "<br>");
 document.write("Now the value of a is: " + a); 
 */

 // Task 2

 /* 
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;
 document.write("a is: " + a + "<br>" + "b is: " + b + "<br>" + "result is: " + result + "<br>");
 document.write(--a + "<br>");
 document.write(--a - --b + "<br>");
 document.write(--a - --b + ++b + "<br>");
 document.write(--a - --b + ++b + b--);
 */

 // Task 3

 /* 
 var name = prompt("Enter your name:");
 document.write("Hello, " + name + " Welcome to my website!");
 */

 // Task 4

 /* 
 var num = prompt("Enter number:");
 if (num === "" ) {
     num = "5";
 }
 num = parseInt(num);
 document.write("Table of " + num + "<br>");
 for (let index = 1; index <= 10; index++) {
     document.write(num + " x " + index + " = " + num * index + "<br>");
 }
 */

 // Task 5

 /* 
 var sub1, sub2, sub3;
 sub1 = prompt("Enter 1st subject name:");
 sub2 = prompt("Enter 2nd subject name:");
 sub3 = prompt("Enter 3rd subject name:");
 var sub1Total = 100, sub2Total = 100, sub3Total = 100;
 var obtSub1, obtSub2, obtSub3;
 obtSub1 = +prompt("Enter 1st subject obtained marks:");
 obtSub2 = +prompt("Enter 2nd subject obtained marks:");
 obtSub3 = +prompt("Enter 3rd subject obtained marks:");
 var totalMarks = sub1Total + sub2Total + sub3Total;
 var totalMarksObt = obtSub1 + obtSub2 + obtSub3;
 var per1 = (obtSub1 / sub1Total) * 100;
 var per2 = (obtSub2 / sub2Total) * 100;
 var per3 = (obtSub3 / sub3Total) * 100;
 var per = (totalMarksObt / totalMarks) * 100;
 document.write("<table cellspacing = '0'>");
 document.write("<tr>");
 document.write("<th>" + "Subject" + "</th>");
 document.write("<th>" + "Total Marks" + "</th>");
 document.write("<th>" + "Obtained Marks" + "</th>");
 document.write("<th>" + "Percentage" + "</th>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + sub1 + "</td>");
 document.write("<td>" + sub1Total + "</td>");
 document.write("<td>" + obtSub1 + "</td>");
 document.write("<td>" + per1 + "%" + "</td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + sub2 + "</td>");
 document.write("<td>" + sub2Total + "</td>");
 document.write("<td>" + obtSub2 + "</td>");
 document.write("<td>" + per2 + "%" + "</td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + sub3 + "</td>");
 document.write("<td>" + sub3Total + "</td>");
 document.write("<td>" + obtSub3 + "</td>");
 document.write("<td>" + per3 + "%" + "</td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + "</td>");
 document.write("<th>" + totalMarks + "</th>");
 document.write("<th>" + totalMarksObt + "</th>");
 document.write("<th>" + per + "%" + "</th>");
 document.write("</tr>");
 document.write("</table>");
 */

 // Chapter 9-11

 // Task 1

 /* 
 var cityName = prompt("Enter your city name:");
 cityName = cityName.toLowerCase();
 if (cityName === "karachi") {
     document.write("Welcome to city of lights");
 } 
 */

 // Task 2

 /* 
 var gender = prompt("Enter your gender:");
 gender = gender.toLowerCase();
 if (gender === "male") {
     document.write("Good Morning Sir.");
 }else if (gender === "female") {
     document.write("Good Morning Ma'am.");
 }
 */

 // Task 3

/*  var color = prompt("Enter color of road traffic signal:");
 color = color.toLowerCase();
 if (color === "red") {
     document.write("Must Stop");
 } else if(color === "yellow") {
    document.write("Ready to move");
 } else if (color === "green"){
    document.write("Move now");
 }
 */
 // Task 4

 /* 
 var fuel = +prompt("Enter remaining fuel in car:");
 if (fuel < 0.25) {
     document.write("Please refill the fuel in your car");
 }
 */ 

 // Task 5

 /* 
 // a.
 var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }

 // b. 
 var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }

 // c. 
 var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }

 // d. 
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }

 // e.
  if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }
 
 // f.
 if("car" < "cat"){ 
 alert("car is smaller than cat");
 }
 */ 

 // Task 6

 /* 
 var sub1, sub2, sub3, remarks = "", grade = "";
 var sub1Total = 100, sub2Total = 100, sub3Total = 100;
 var obtSub1, obtSub2, obtSub3;
 obtSub1 = +prompt("Enter 1st subject obtained marks:");
 obtSub2 = +prompt("Enter 2nd subject obtained marks:");
 obtSub3 = +prompt("Enter 3rd subject obtained marks:");
 var totalMarks = sub1Total + sub2Total + sub3Total;
 var totalMarksObt = obtSub1 + obtSub2 + obtSub3;
 var per = (totalMarksObt / totalMarks) * 100;
 if (per >= 80){
     grade = "A-one";
     remarks = "Excellent";
 }else if(per < 80 && per >= 70){
    grade = "A";
    remarks = "Good";
 }else if(per < 70 && per >= 60){
    grade = "B";
    remarks = "You need improve";
 }else if(per < 60){
    grade = "Fail";
    remarks = "Sorry";
 }
 document.write("<h1>Marks Sheet</h1>");
 document.write("Total marks : " + totalMarks + "<br>");
 document.write("Marks obtained : " + totalMarksObt + "<br>");
 document.write("Percentage : " + per + "%" + "<br>");
 document.write("Grade : " + grade + "<br>");
 document.write("Remarks : " + remarks);
 */

 // Task 7

/* 
 var secretNum = 6;
 var num = +prompt("Please guess the secret number:");
 if (num === secretNum) {
     document.write("Bingo! Correct answer.")
 }else if((num + 1) === secretNum){
     document.write("Close enough to the correct answer.");
 } 
 */

 // Task 8

/* 
 var num = +prompt("Enter a number:");
 if (num % 3 == 0) {
     document.write(num + " is divisible by 3");
 }
 */

 // Task 9

 /* 
 var num = +prompt("Enter a number:");
 if (num % 2 == 0) {
     document.write(num + " is an even number");
 }else if(num % 2 != 0) {
    document.write(num + " is not an even number");
 }
 */

 // Task 10

 /* 
 var temp = +prompt("Enter temperature:");
 if (temp > 40) {
     document.write("It is too hot outside.");
 }else if (temp > 30) {
    document.write("The Weather today is Normal.");
 }else if (temp > 20) {
    document.write("Today’s Weather is cool.");
 }else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool.");
 }
 */ 

 // Task 11

 /* 
 var num1 = +prompt("Enter first number:");
 var oper = prompt("Enter operation:");
 var num2 = +prompt("Enter second number:");
 var result = num1 + num2;
 var flag = 0;
 if (oper === "+") {
     result = num1 + num2;
 } else if(oper === "-") {
    result = num1 - num2;
 } else if(oper === "*") {
    result = num1 * num2;
 } else if(oper === "/") {
    result = num1 / num2;
 } else if(oper === "%") {
    result = num1 % num2;
 }else{
     document.write("Please enter valid operation!");
     flag = 1;
 }
 if(flag == 0)
    document.write(num1 + " " + oper + " " + num2 + " = " + result);
 */

 // Chapter 12-13

 // Task 1

 /* 
 var char = prompt("Enter a single character:").charAt(0);
 if (char >= '0' && char <= '9') {
    document.write(char + ' is a number'); 
 }else if (char.charCodeAt() >= '65' && char.charCodeAt() <= '90') {
    document.write(char + ' is an uppercase character');
 }else if (char.charCodeAt() >= '97' && char.charCodeAt() <= '122'){
    document.write(char + ' is a lowercase character');
 }else{
     document.write("Invalid entry!");
 }
 */

 // Task 2

 /* 
 var num1 = +prompt("Enter 1st number: ");
 var num2 = +prompt("Enter 2nd number:");
 if (num1 > num2) {
     document.write(num1 + " is larger than " + num2);
 }else if(num1 == num2){
    document.write(num1 + " is equal to " + num2);
 }else if(num1 < num2){
    document.write(num2 + " is larger than " + num1);
 } 
 */

 // Task 3

 /* 
 var num = +prompt("Enter a number:");
 if (num === 0) {
     document.write(num + " is equal to " + num);
 }else if (num < 0) {
    document.write(num + " is negative");
 }else if (num > 0) {
    document.write(num + " is positive");
 } 
 */

 // Task 4

 /* 
 var char = prompt("Enter a single character:").charAt(0);
 if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
     document.write(char + " is a vowel");   
 }else if (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
    document.write(char + " is a vowel");
 }else{
    document.write(char + " is not a vowel");
 } 
 */

 // Task 5

 /* 
 var corrpass = "abc12345";
 var password = prompt("Please enter your password:");
 if (password === corrpass) {
     document.write("Correct! The password you entered matches the original password");
 } else if(password === ""){
     document.write("Please enter your password");
 }else{
     document.write("Incorrect password!");
 }
 */ 

 // Task 6

 /* 
 var greeting;
 var hour = 13;
 if (hour < 18) {
    greeting = "Good day";
 }else{
    greeting = "Good evening";
 }

 */ 

 // Task 7

 /* 
 var time = +prompt("Enter time in 24 hours clock format like: 1900 = 7pm:");
 if(time >= 0000 && time < 1200){
     document.write("Good morning!");
 }else if(time >= 1200 && time < 1700){
    document.write("Dood afternoon!");
 }else if(time >= 1700 && time < 2100){
    document.write("Dood evening!");
 }else if(time >= 2100 && time < 2359){
    document.write("Dood night!");
 }else{
     document.write("Invalid entry!");
 }
 */

 // Chapter 14-16

 // Task 1

 // var studentNames = [];

 // Task 2

 // var studentNames = new Array();

 // Task 3

 // var str = ["HTML", "CSS", "Bootstrap"];
 
 // Task 4

 // var num = [1, 3, 4, 9, 10];

 // Task 5

 // var bool = [true, false];

 // Task 6

 // var mixArr = [1, "abc", true, 'd', 5.3];

 // Task 7

 /* 
 var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
 document.write("<h1>Qualifications:</h1>");
 for (let index = 0; index < qualification.length; index++) {
     document.write((index + 1) + ") " + qualification[index] + "<br>");
 }
 */

 // Task 8

 /* 
 var stdName = ["Hassan", "Hamza", "Anas"];
 var stdScore = [320, 230, 480];
 var total = 500;
 var per = [(stdScore[0] / total) * 100, (stdScore[1] / total) * 100, (stdScore[2] / total) * 100];
 for (let index = 0; index < 3; index++) {
    document.write("Score of " + stdName[index] + " is " + stdScore[index] + ". Percentage: " + per[index] + "% <br>");
 } 
 */

 // Task 9

 /* 
 var colorArray = ["pink ", "blue ", "black"];
 document.write(colorArray + "<br>");
 var addColorFirst = prompt("Enter color name to add in the beggining of the array:");
 colorArray.unshift(addColorFirst);
 document.write(colorArray + "<br>");
 var addColorLast = prompt("Enter color name to add in the last of the array:");
 colorArray.push(addColorLast);
 document.write(colorArray + "<br>");
 colorArray.unshift("purple", "brown");
 document.write(colorArray + "<br>");
 colorArray.shift();
 document.write(colorArray + "<br>");
 colorArray.pop();
 document.write(colorArray + "<br>");
 var colorIndex = +prompt("Enter index number at which you want add color name:");
 var colorName = prompt("Enter color name:");
 colorArray.splice(colorIndex, 0, colorName);
 document.write(colorArray + "<br>");
 var delIndex = +prompt("Enter index number at which you want remove color name:");
 var delCount = +prompt("How many element to delete:");
 colorArray.splice(delIndex, delCount);
 document.write(colorArray);
 */

 // Task 10

 /* 
 var stdScore = [320, 230, 480, 120];
 document.write("scores of Students: " + stdScore + "<br>");
 stdScore.sort();
 document.write("Ordered scores of Students: " + stdScore + "<br>");
 */

 // Taskt 11

 /* 
 var cityNames = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta"];
 document.write("Cities list: " + "<br>");
 document.write(cityNames + "<br>");
 var selectedCities = cityNames.slice(0, 3);
 document.write("<br>Selected cities list: <br>" + selectedCities);
 */

 // Task 12

 /* 
 var arr = ["This "," is ", " my ", " cat"];
 document.write("Array: <br>");
 document.write(arr + "<br>");
 document.write("String:<br>");
 var str = arr.join(" ");
 document.write(str);
 */

 // Task 13

 /* 
 var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
 document.write("Devices: <br>");
 document.write(arr + "<br><br>");
 for (let index = 0; index < arr.length; index++) {
    document.write("Out: <br>");
    document.write(arr[index] + "<br>");
 }
 */

 // Task 14

 /* 
 var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
 document.write("Devices: <br>");
 document.write(arr + "<br><br>");
 for (let index = arr.length - 1; index >=0; index--) {
    document.write("Out: <br>");
    document.write(arr[index] + "<br>");
 } 
 */

 // Task 15
 
 /* 
 var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<select>");
 document.write("<option>" + "Phone Manufactures" + "</option>");
 for (let index = 0; index < arr.length; index++) {
    document.write("<option>" + arr[index] + "</option>");
 }
 document.write("</select>");
 */

 // Chapter 17-20

 // Task 1

 // var arr = [[],[]];

 // Task 2

 /* 
 var arr = [
     [0, 1, 2, 3], 
     [1, 0, 1, 2], 
     [2, 1, 0, 1]
    ];
 for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
         document.write(arr[i][j] + " ");
     }   
     document.write("<br>");
 }
 */

 // Task 3

 /* 
 for (let index = 1; index <= 10; index++) {
     document.write(index + "<br>");
 }
 */

 // Task 4

 /* 
 var num = +prompt("Enter nummber:");
 var len = +prompt("Enter lenth:");
 document.write("Multiplicatoion table of: " + num +  "<br>");
 document.write("Length: " + len + "<br><br>");
 for (let index = 1; index <= len; index++) {
    document.write(num + " x " + index + " = " + num * index + "<br>");
 }
 */

 // Task 5

 /* 
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 for (let index = 0; index < fruits.length; index++) {
     document.write("Elements at index " + index + " is " + fruits[index] + "<br>");
 }
 */

 // Task 6

 /*
 // a)
 document.write("Counting:<br><br>");
 for (let index = 1; index < 16; index++) {
     document.write(index + " ,");   
 }
 // b)
 document.write("<br><br>Reverse counting:<br><br>");
 for (let index = 10; index > 0; index--) {
     document.write(index + " ,");   
 }
 // c)
 document.write("<br><br>Even:<br><br>");
 for (let index = 0; index <= 20; index += 2) {
     document.write(index + " ,");   
 }
 // d)
 document.write("<br><br>Odd:<br><br>");
 for (let index = 1; index < 20; index += 2) {
     document.write(index + " ,");   
 }
 // e)
 document.write("<br><br>Series:<br><br>");
 for (let index = 2; index <= 20; index += 2) {
     document.write(index + "k ,");   
 }
 */

 // Task 7

 /* 
 var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var item = prompt("Welcome to abc bakery. What do you want to order ?");
 var flag = 0;
 for (let index = 0; index < A.length; index++) {
     if (item === A[index]) {
         document.write(A[index] + " is available at index " + index + " in our bakery");
         flag = 1;
         break;
     }
 }
 if (flag ===  0) {
     document.write("We are sorry. " + item + " is not available in our bakery");
 }
 */

 // Task 8 

 /* 
 var A = [24, 53, 78, 91, 12];
 var largest = A[0];
 document.write("Array items: " + A + "<br>");
 for (let index = 0; index < A.length; index++) {
     if (largest < A[index]) {
         largest = A[index];
     }
 }
 document.write("The largest number is " + largest);
 */

 // Task 9

 /* 
 var A = [24, 53, 78, 91, 12];
 var smallest = A[0];
 document.write("Array items: " + A + "<br>");
 for (let index = 0; index < A.length; index++) {
     if (smallest > A[index]) {
         smallest = A[index];
     }
 }
 document.write("The smallest number is " + smallest);
 */

 // Task 10

 /* 
 for (let index = 5; index <= 100; index += 5) {
     document.write(index + " ,");
 } 
 */

 // Chapter 21-25

// Task 1

 /* 
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + " welcome to my website!");
 */

 // Task 2

 /* 
 var phone = prompt("Enter your favorite mobile phone model");
 document.write("My favourite phone is: " + phone);
 document.write("<br>Length is: " + phone.length);
 */

 // Task 3

 /* 
 var str = "Pakistani";
 var index = str.indexOf("n");
 document.write("String: " + str + "<br>");
 document.write("Index of 'n': " + index);
 */

 // Task 4

 /* 
 var str = "Hello World";
 var lastIndex = str.lastIndexOf("l");
 document.write("String: " + str + "<br>");
 document.write("Last index of 'l': " + lastIndex);
 */

 // Task 5

 /* 
 var str = "Pakistani";
 var char = str.charAt(3);
 document.write("String: " + str + "<br>");
 document.write("Character at index 3: " + char);
 */

 // Task 6

 /*  
 var firstName = prompt("Enter your first name:");
 var lastName = prompt("Enter your last name:");
 var fullName = firstName.concat(" ", lastName);
 alert("Hello, " + fullName + " welcome to my website!");
 */

 // Task 7

 /* 
 var city = "Hyderabad";
 var replace = city.replace("Hyder", "Islam");
 document.write("City: " + city + "<br>");
 document.write("After replacement: " + replace);
 */

 // Task 8

 /*   
 var message = "Ali and Sami are best friends. They play cricket and football together.";
 var replace = message.replace(/and/g, "&");
 document.write(replace);
 */

 // Task 9

 /* 
 var str = "472";
 var int = parseInt(str);
 document.write("Value: " + str + "<br>");
 document.write("Type: " + typeof(str) + "<br>");
 document.write("Value: " + int + "<br>");
 document.write("Type: " + typeof(int));
 */ 

 // Task 10
 
 /* 
 var input = prompt("Enter any string:");
 var cap = input.toUpperCase();
 document.write("User input: " + input + "<br>");
 document.write("Upper case: " + cap);
 */ 

 // Task 11

 /* 
 var input = prompt("Enter any string:");
 var tit = input.slice(0, 1).toUpperCase() + input.slice(1);
 document.write("User input: " + input + "<br>");
 document.write("Title case: " + tit);
 */ 

 // Task 12

 /* 
 var num = 35.36 ;
 var str = num.toString();
 var repStr = str.replace(".", "");
 document.write("Number: " + str + "<br>");
 document.write("Result: " + repStr);
 */ 

 // Task 13

 /*  
 var userName = prompt("Enter your username:");
 for (var i = 0; i < userName.length; i++){ 
    if (userName.charAt(i) === "!" || userName.charAt(i) === "@" || userName.charAt(i) === "." || userName.charAt(i) === ",") {
     alert("Please enter a valid username!");
     break;
    }
 }
 */

 // Task 14

 /* 
 var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var search = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am:");
 var flag = 0, found, ind;
 var item = search.toLowerCase();
 for (let index = 0; index < A.length; index++) {
     if (item === A[index]) {
        found = A[index];
        ind = index;
        flag = 1; 
        break;
     }
 }
 if (flag === 1) {
    document.write(search + " is available at index " + ind + " in our bakery");
 }else{
     document.write("We are sorry. " + search + " is not available in our bakery")
 }
 */ 

 // Task 15

 /* 
 var password = prompt("Please enter your password:");
 var flag = 0, num = 0, l = 0, firstChar = password.charAt(0);
 if (password.length >= 6) {
   for (let i = 0; i < password.length; i++) {
      if (password.charAt(i) >= "0" && password.charAt(i) <= "9" || password.charAt(i) >= "a" && password.charAt(i) <= "z" || password.charAt(i) >= "A" && password.charAt(i) <= "Z") {
         if (firstChar >= "0" && firstChar <= "9") {
            document.write("Password cannot begin with a number<br>Please enter a valid password");
            flag = 1;
            break;
         }
      }else{
         num = 1;
         break;
      }
   }  
 }else{
    document.write("Password should be 6 or more digits long");
    l = 1;
 }
 if (num == 1) {
    document.write("Password should be contain numbers and alphabets<br>");
    document.write("Please enter a valid password");
 }
 if (flag == 0 && num == 0 && l == 0) {
    document.write("Entered password is: " + password + "<br>");
    document.write("Password is correct");
 }
 */ 

 // Task 16

 /* 
 var university = "University of Karachi";
 var str = university.split("");
 for (let index = 0; index < str.length; index++) {
    document.write(str[index] + "<br>");    
 }
 */ 

 // Task 17

 /* 
 var userInput = prompt("Enter a string:");
 var lastChar = userInput.charAt(userInput.length - 1);
 document.write("User input: " + userInput + "<br>");
 document.write("Last character of input: " + lastChar);
 */ 

 // Task 18

 /* 
 var str = "The quick brown fox jumps over the lazy dog";
 var custum = str.toLowerCase();
 custum = custum.split(" ");
 var count = 0;
 for (var i = 0; i < str.length; i++) {
   if (custum[i] === "the") {
       count++;
   }
 }
 document.write("Text: " + str + "<br>");
 document.write("There are " + count + " occurence(s) of word 'the'");
 */ 

 // Chapter 26-30

 // Task 1

 /*   
 var positiveNum = +prompt("Enter a positive integer number:");
 if (positiveNum >= 0){
   document.write("Number: " + positiveNum + "<br>");
   document.write("Round off value: " + Math.round(positiveNum) + "<br>");
   document.write("Floor value: " + Math.floor(positiveNum) + "<br>");
   document.write("Ceil value: " + Math.ceil(positiveNum));   
 }else{
    document.write("Please enter a positive integer number!");
 }
 */ 

 // Task 2

 /* 
 var negativeNum = +prompt("Enter a positive integer number:");
 if (negativeNum < 0){
   document.write("Number: " + negativeNum + "<br>");
   document.write("Round off value: " + Math.round(negativeNum) + "<br>");
   document.write("Floor value: " + Math.floor(negativeNum) + "<br>");
   document.write("Ceil value: " + Math.ceil(negativeNum));   
 }else{
    document.write("Please enter a negative integer number!");
 }
 */

 // Task 3

 /* 
 var num = +prompt("Enter a number:");
 var abs = Math.abs(num);
 document.write("The absolute value of " + num + " is " + abs);
 */

 // Task 4

 /* 
 var rand = Math.random() * 6;
 rand = Math.ceil(rand);
 document.write("Random dice value: " + rand);
 */

 // Task 5

 /* 
 var rand = Math.random() * 2;
 rand = Math.ceil(rand);
 if (rand === 1) {
   document.write(rand + "<br>");
   document.write("Random coin value: Heads");  
 }else if (rand === 2) {
   document.write(rand + "<br>");
   document.write("Random coin value: Tails");
 }
 */

 // Task 6

 /* 
 var rand = Math.random() * 100;
 rand = Math.ceil(rand);
 document.write("Random number between 1 and 100: " + rand);
 */

 // Task 7

 /* 
 var weight = prompt("Enter your weight in kilograms:");
 weight = parseFloat(weight);
 document.write("The weight of user is: " + weight + " kilograms");
 */ 

 // Task 8

 /* 
 var userInput = +prompt("Enter a number between 1 to 10:");
 var secretNumber = Math.random() * 10;
 secretNumber = Math.ceil(secretNumber);
 if (userInput === secretNumber) {
    alert("Congratz, Your answer is correct.");
 }else{
    alert("Try again!");
 }
 */ 

 // Chapter 31-34

 // Task 1

 /*  
 var time = new Date();
 document.write(time);
 */ 

 // Task 2

 /* 
 const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
 ];
 var month = new Date();
 alert("Current month: " + monthNames[month.getMonth()]);
 */

 // Task 3

 /*  
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 alert("Today is " + nameOfToday);
 */ 

 // Task 4

 /* 
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 if (nameOfToday === "Sat" || nameOfToday === "Sun") {
    document.write("It's Fun day");
 }
 */

 // Task 5

 /* 
 var now = new Date();
 var theDate = now.getDate();
 if (theDate < 16) {
    document.write("First fifteen days of the month");
 }else{
    document.write("Last days of the month");
 }
 */

 // Task 6

 /* 
 var now = new Date();
 document.write("Current Date: " + now + "<br>");
 document.write("Elapsed milliseconds since January 1, 1970: " + now.getTime() + "<br>");
 document.write("Elapsed minutes since January 1, 1970: " + now.getTime() / (1000 * 60 * 60));
 */

 // Task 7

 /* 
 var now = new Date();
 var hour = now.getHours();
 if (hour >= 0 && hour <= 11) {
    alert("It's AM");
 }else if(hour >= 12 && hour <= 23){
   alert("It's PM");
 }
 */

 // Task 8

 /* 
 var laterDate = new Date("Dec 31, 2020");
 document.write("Later date: " + laterDate);
 */ 

 // Task 9

 /* 
 var ramzan = new Date("Jun 12, 2015");
 var currentDate = new Date();
 var pastDays = currentDate.getTime() - ramzan.getTime();
 pastDays /= 1000 * 60 * 60 * 24;
 pastDays = Math.floor(pastDays);
 document.write(pastDays + " have passed since 1st Ramzan, 2015");
 */

 // Task 10

 /*   
 var ramzan = new Date("2020");
 var currentDate = new Date();
 var pastSec = currentDate.getTime() - ramzan.getTime();
 pastSec /= 1000;
 pastSec = Math.floor(pastSec);
 document.write("On reference date " + currentDate + ",<br>");
 document.write(pastSec + " seconds had passed since beginning of 2020");
 */

 // Task 11

 /* 
 var currentDate = new Date();
 var ahead = new Date();
 ahead.setHours(currentDate.getHours() + 1);
 document.write("Current date: " + currentDate + "<br>");
 document.write("1 hour ago, " + ahead);
 */

 // Task 12

 /* 
 var currentDate = new Date();
 var reset = new Date();
 reset.setFullYear(currentDate.getFullYear() - 100);
 document.write("Current date: " + currentDate + "<br>");
 document.write("100 years back, it was " + reset);
 */ 

 // Task 13

 /* 
 var age = prompt("Enter your age:");
 var currentDate = new Date();
 var birth = new Date(age);
 var birthYear = currentDate.getFullYear() - birth.getFullYear();
 document.write("Your age is " + birthYear + "<br>");
 document.write("Your birth year is " + birth.getFullYear());
 */

 // Task 14

 /* 
 var cusName = prompt("Enter your name:");
 var currentMonth = new Date();
 const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
 ];
 var units = 410, chargesPerUnit = 16;
 var latePayment = 350;
 var netAmount = units * chargesPerUnit;
 var grossAmount = netAmount + latePayment;
 document.write("<h1>K-Electric Bill</h1>");
 document.write("Customer Name: " + cusName + "<br>");
 document.write("Month: " + monthNames[currentMonth.getMonth()] + "<br>");
 document.write("Number of units: " + units + "<br>");
 document.write("Charges per unit: " + chargesPerUnit + "<br><br>");
 document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
 document.write("Late payment surcharge: " + latePayment + "<br>");
 document.write("Gross amount Payable (after Due Date): " + grossAmount);
 */

 // Chapter 35-38

 // Task 1

 /* 
 function dateDisplay() {
    var time = new Date();
    document.write(time);   
 }
 dateDisplay();
 */

 // Task 2

 /* 
 function greet (fName, lName) {
    var fullName = fName + " " + lName;
    document.write("Hello, " + fullName + " welcome to my website.");
 }
 greet("Hassan", "Ahmed");
 */

 // Task 3

 /* 
 var num1 = +prompt("Enter 1st number:");
 var num2 = +prompt("Enter 2nd number:");
 function sum(num1, num2) {
    var add = num1 + num2;
    return add;
 }
 document.write(sum(num1, num2));
 */ 

 // Task 4

 /* 
 var num1 = +prompt("Enter first number:");
 var num2 = +prompt("Enter second number:");
 var oper = prompt("Enter operator:");
 var result = 0;
 function calculator(num1, num2, oper) {
    if (oper === '+') {
       result = num1 + num2;
       return result;
    }else if (oper === '-') {
      result = num1 - num2;
      return result;
    }else if (oper === '*') {
      result = num1 * num2;
      return result;
    }else if (oper === '/') {
      result = num1 / num2;
      return result;
    }else if (oper === '%') {
      result = num1 % num2;
      return result;
    }else{
       result = 1;
       return result;
    }
 }
 var calcResult = calculator(num1, num2, oper);
 if (calcResult != 1) {
    document.write("Result = " + calcResult);  
 }else{
    document.write("Invalid entry!");
 }
 */

 // Task 5

 /* 
 var num = +prompt("Enter a number:");
 function sqrs(num) {
    return Math.pow(num, 2);
 }
 document.write("Square of " + num + " is " + sqrs(num));
 */

 // Task 6

 /* 
 var num = +prompt("Enter a number:");
 function fac(num) {
    if (num == 0) {
       return 1;
    }else if (num < 0) {
       return 0;
    }else{
       return num * fac(num - 1); 
    }
 }
 if (fac(num) != 0) {
   document.write("factorial of " + num + " is " + fac(num));
 }else{
    document.write("Please enter positive number!");
 }
 */

 // Task 7

 /* 
 var start = +prompt("Enter first number:");
 var last = +prompt("Enter last number:");
 function counting(first, last) {
    for (let index = first; index <= last; index++) {
       document.write(index + ", ");
    }
 }
 counting(start, last);
 */

 // Task 8

 /* 
 var base = +prompt("Enter base of a righ angle triangle:");
 var perpendicular = +prompt("Enter perpendicular of a righ angle triangle:");
 function calculateHypotenuse(base, per) {
    function calculateSquare(num) {
       return Math.pow(num, 2);
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(per);
    hypotenuse = Math.sqrt(hypotenuse);
    return hypotenuse.toFixed(2);  
 }
 document.write("Hypotenuse of a triangle: " + calculateHypotenuse(base, perpendicular));
 */

 // Task 9

 // a)
 /*
 function area(width, height) {
    return width * height;
 }
 var areaRect = area(2, 3);
 document.write("Area of a rectangle: " + areaRect);
 */
 // b)

 /*  
 function area(width, height) {
   return width * height;
 }
 var width = 2, height = 3;
 var areaRect = area(width, height);
 document.write("Area of a rectangle: " + areaRect);
 */

 // Task 10 

 /* 
 function palindrome(str) {
   var re = /[\W_]/g;
   var lowRegStr = str.toLowerCase().replace(re, '');
   var reverseStr = lowRegStr.split('').reverse().join(''); 
   return reverseStr === lowRegStr;
 }
 var str = "madam MadAm";
 if (palindrome(str)) {
    document.write("String is palindrome");
 }else{
    document.write("String is not palindrome");
 }
 */

 // Task 11

//  function capitalize_Words(str){
//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
//  }
//  var str = "the quick brown fox";
//  document.write("Example string: " + str + "<br>");
//  document.write("Capitalized: " + capitalize_Words(str)); 

 // Task 12

 /*  
 var str = "Web Development Tutorial";
 function long(str) {
   str = str.split(" ");
   var long = str[0].length;
   var longWord = "";
   for (let i = 0; i < str.length; i++) {
      if (long < str[i].length) {
         long = str[i].length;
         longWord = str[i];
      }
   }
   return longWord;  
 }
 document.write(long(str));
 */ 

 // Task 13

 /* 
 var str = "The quick brown fox jumps over the lazy dog";
 function occurence(str, check) {
   var custum = str.toLowerCase();
   var count = 0;
   for (var i = 0; i < str.length; i++) {
     if (custum[i] === check) {
         count++;
     }
   }
   document.write("Sample argument: " + str + "<br>");
   document.write("There are " + count + " occurence(s) of letter " + check);
 }
 occurence("JSResourceS.com", "s");
 */ 

 // Task 14 Geomatrizer

 /*  
 function calcCircumference(radius) {
    var circumference = 2 * Math.PI * Math.pow(radius, 2);
    return circumference.toFixed(2);
 }
 function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
 }
 var radius = 2;
 document.write("Circumference of a circle: " + calcCircumference(radius) + "<br>");
 document.write("Area of a circle: " + calcArea(radius));
  
 */

// Chapter 38-42

// Task 1
/* 
function pow(a, b){
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}
 */

 // Task 2
/* 
 function years(year){
     if(year == 2012 || year == 2016 || year == 2020){
         document.write(year + " is leap year");
     }else{
        document.write(year + " is not leap year");
     }
 }
  */

  // Task 3
/* 
  function area(a, b, c){
      var s = (a + b + c) / 2;
      var result = s * (s - a) * (s - b) * (s - c);
      return result;
  }
 */

 // Task 4
/* 
 function everage(a, b, c){
     var evg = (a + b + c) / 3;
     return evg;
 }

 function perc(a, b, c){
     var per = ((a + b + c) / 300 ) * 100;
     return per;
 }
 
 function main(){
     var marks1 = 89, marks2 = 76, marks3 = 56;
     var evg = everage(marks1, marks2, marks3);
     var per = perc(marks1, marks2, marks3);
     document.write("Everage = " + evg + "<br>");
     document.write("Percentage = " + per);
 } */

 // Task 5

/*  var index, ch = 'n';
 function indexOf(ch){
     var text = "Hassan Ahmed";
     for(var i = 0; i < text.length; i++){
         if (ch == text[i]) {
             index = i;
             break;
         }else{
             index = -1;
         }
     }
     return index;
 }

if (indexOf(ch) != -1) {
    document.write("Index of " + ch + " is " + index);
}else{
    document.write("Index not found!");
} */

// Task 6

/* function delVowels(str){
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            str.splice(i - 1, 1);
        }
    }
}
 */

 // Task 7

/*  function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    // Loop over every character
    for(let i = 0; i < chars.length; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      // Increase count if both characters are any of the following: aeiou
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++;
      }
    }
    
    return count;
  }
  
  // Check if a character is any of the following: aeiou
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var found = findOccurrences();
  
  console.log(found);
 */

 // Task 8

 /* 
 var distance = +prompt("Enter distance between two cities:");
 function toMeter(dis){
     var dist = dis * 1000;
     document.write("Distance in meter is: " + dist.toFixed(2) + "<br>");
 }

 
 function toFeet(dis){
    var dist = dis * 3280.84;
    document.write("Distance in feet is: " + dist.toFixed(2) + "<br>");
 }

 function toInch(dis){
    var dist = dis * 39370.1;
    document.write("Distance in inch is: " + dist.toFixed(2) + "<br>");
 }

 function toCentimeter(dis){
    var dist = dis * 100000;
    document.write("Distance in centimeter is: " + dist.toFixed(2) + "<br>");
 }

 toMeter(distance);
 toFeet(distance);
 toInch(distance);
 toCentimeter(distance);
 */

 // Task 9

/* 
 var overTimePay = 12, overTime = 0, overTimeRupees;
 var hour = +prompt("Enter worked hour:");
 if (hour >= 40) {
     overTime = hour - 40;
 }
 overTimeRupees = overTime * overTimePay;
 alert("Rs. " + overTimeRupees);
  */

  // Task 10
/* 
  var hund = 0, fift = 0, ten = 0, flag = false;
  var amount = +prompt("Enter amount in hundreds:");
  while(true){
      if (amount >= 100) {
          amount -= 100;
          hund++;
      }else if(amount >= 50){
          amount -= 50;
          fift++;
      }else if(amount >= 10){
        amount -= 10;
        ten++;
      }
      if (amount == 0) {
          break;
      }
  }
 document.write("You will have " + hund + " hundred notes " + fift + " fifty notes " + ten + " ten notes");
 */

 // Chapter 43-48

 // Task

 /* <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a>
  alert("Hi");
 */

 // Task 2
 /* 
 <img src="image1.jpg" onClick="alert('Thanks for purchasing a phone from us');">
 <img src="image2.jpg" onClick="alert('Thanks for purchasing a phone from us');">
 <img src="image3.jpg" onClick="alert('Thanks for purchasing a phone from us');">
 <img src="image4.jpg" onClick="alert('Thanks for purchasing a phone from us');">
 */        

 // Task 3

/*  <table id="table" cellspacing = '0'>
 
 <tr>
 <th>Index</th>
 <th>Name</th>
 <th>Class</th>
 </tr>

 <tr id="row1">
 <td>0</td>
 <td>Mark</td>
 <td>10</td>
 <td><button onclick="deleteRow('row1')">Delete</button></td>
 </tr>

 <tr id="row2">
 <td>1</td>
 <td>James</td>
 <td>9</td>
 <td><button onclick="deleteRow('row2')">Delete</button></td>
 </tr>

 <tr id="row3">
 <td>2</td>
 <td>Jhone</td>
 <td>10</td>
 <td><button onclick="deleteRow('row3')">Delete</button></td>
 </tr>

 <tr id="row4">
 <td>3</td>
 <td>Doe</td>
 <td>5</td>
 <td><button onclick="deleteRow('row4')">Delete</button></td>
 </tr>

 </table>

 function deleteRow(rowId) {
     document.getElementById(rowId).remove();
  }
 */
   // Task 4

  //  <img src="image5.jpg" alt="image" onmouseover="src='image6.jpg'" onmouseout="src='image5.jpg'">

  // Task 5
  /* 
    <div id="div"></div>
    <button onclick="increase()">Increase</button>
    <button onclick="decrease()">Decrease</button>

  var count = 0;
  var div = document.getElementById('div');
  div.innerHTML = count;

  function increase(){
      count++;
      div.innerHTML = count;
  }
  
  function decrease(){
    count--;
    div.innerHTML = count;
  } */

  // Chapters 49-52

  // Task 1

  /* <form>
        Name:
        <input id="name" type="text">
        Age:
        <input id="age" type="date">
        Number:
        <input id="num" type="tel">
        City:
        <input id="city" type="text">
        <br><br><br>
        <button type="button" onclick="display();">Submit</button>
    </form>

  function display(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var num = document.getElementById('num').value;
    var city = document.getElementById('city').value;
      document.write(name + "<br>");
      document.write(age + "<br>");
      document.write(num + "<br>");
      document.write(city);
  }
   */

   // Task 2

   /* 
   <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<a href="JavaScript:void(0)" onclick="readMore()">read more</a></p>

   var paragrapgh = document.getElementById('para');
   function readMore(){
       paragrapgh.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo similique expedita debitis magni vero atque tempora perferendis, maxime inventore tempore dignissimos eos itaque accusamus labore at explicabo. Ab, maxime."
   }
    */

    // Chapter 53-58

    // Task 1

//      <style>
//     .img {
// border-radius: 5px;
// cursor: pointer;
// transition: 0.3s;
// }
// .close {
// position: absolute;
// top: 15px;
// right: 35px;
// color: #f1f1f1;
// font-size: 40px;
// font-weight: bold;
// transition: 0.3s;
// }
// .close:hover,
// .close:focus {
// color: #bbb;
// text-decoration: none;
// cursor: pointer;
// }
//     .modal {
// display: none; /* Hidden by default */
// position: fixed; /* Stay in place */
// z-index: 1; /* Sit on top */
// padding-top: 100px; /* Location of the box */
// left: 0;
// top: 0;
// width: 100%; /* Full width */
// height: 100%; /* Full height */
// overflow: auto; /* Enable scroll if needed */
// background-color: rgb(0,0,0); /* Fallback color */
// background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
// }
// .modal-content {
// margin: auto;
// display: block;
// width: 80%;
// max-width: 700px;
// }
// </style>

//     <img id="img1" src="images/1.jpg" alt="Snow" onclick="mod('img1')" class="img" style="width: 221px;">
//     <img id="img2" src="images/2.jpg" alt="Snow" onclick="mod('img2')" class="img" style="width: 221px;">
//     <img id="img3" src="images/3.jpg" alt="Snow" onclick="mod('img3')" class="img" style="width: 221px;">
//     <img id="img4" src="images/4.png" alt="Snow" onclick="mod('img4')" class="img" style="width: 221px;">
//     <img id="img5" src="images/5.jpg" alt="Snow" onclick="mod('img5')" class="img" style="width: 221px;">
//     <img id="img6" src="images/6.jpg" alt="Snow" onclick="mod('img6')" class="img" style="width: 221px;">

// <!-- The Modal -->
//     <div id="myModal" class="modal">
//         <span class="close">&times;</span>
//         <img class="modal-content" id="img01">
//     </div>

//     var modal = document.getElementById("myModal");

//  var modalImg = document.getElementById("img01");

//  function mod(id){
//     var img = document.getElementById(id); 
//     modal.style.display = "block";
//     modalImg.src = img.src;
//  }

//  var span = document.getElementsByClassName("close")[0];

//  span.onclick = function() { 
//    modal.style.display = "none";
//  }

// Task 2

/*
 <p id="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ipsa at ipsum culpa assumenda labore esse eum itaque quidem cumque adipisci nisi quo eveniet modi atque earum sit ullam sed!</p>
    <button onclick="zoomIn()" style="width: 60px; height: 30px;">+</button>
    <button onclick="zoomOut()" style="width: 60px; height: 30px;">-</button>

var para = document.getElementById('para');
var count = 0;
function zoomIn(){
    count += 10;
    para.style.fontSize = count + "px"; 
}
function zoomOut(){
    count -= 10;
    para.style.fontSize = count + "px"; 
} 
*/

 // Chapter 58-67
/* 
 <div
 ><h1>DOM</h1
 ><div id="form-content" class="content"
     ><label for="first-name">First Name</label
     ><input type="text" id="first-name" /
     ><label for="last-name">Last Name</label
     ><input type="text" id="last-name"/
     ><label for="email">Email</label
     ><input type="text" id="email" /
 ></div
 ><div id="main-content" class="content"
     ><p class="render"> First Name : Alex</p
     ><p class="render" id="lastName">Last Name: Bank</p
     ><p class="render"> Email : alexbank@example.com</p
     ><p class="render"> Country : Pakistan </p
     ><p class="render"> contact : +92 300 1234567</p
 ></div
></div>

 */
 // Task 1

 /*
 // i)
  var mainContent = document.getElementById('main-content');
 
 // ii)
 document.write("Child Names:<br><br>");
 for (let index = 0; index < mainContent.childNodes.length; index++) {
    document.write(mainContent.childNodes[index].nodeName + "<br>");   
 }

 // iii)
 var render = document.getElementsByClassName('render');
 document.write("<br>InnerHTML Names:<br><br>");
 for (let index = 0; index < render.length; index++) {
     document.write(render[index].innerHTML + "<br>");
 }

 // iv)
 var firstName = document.getElementById('first-name');
 firstName.setAttribute("value", "Alex");

 // v)
 var lastName = document.getElementById('last-name');
 lastName.setAttribute("value", "Bank");

 var email = document.getElementById('email');
 email.setAttribute("value", "alexbank@example.com");
  */

  // Task 2

  /* 
 // i)
  var formContent = document.getElementById('form-content');
  document.write(formContent.nodeType + "<br>");

   // ii)
  var lastName = document.getElementById('lastName');
  document.write("lastName nodeType " + lastName.nodeType + "<br>");
  document.write("lastName child nodeType " + lastName.childNodes[0].nodeType + "<br>");

  // iii)
   lastName.childNodes[0].nodeValue = "Hassan";

  // iv)
   var mainContent = document.getElementById('main-content');
   document.write(mainContent.firstChild.nodeName + " " + mainContent.lastChild.nodeName + "<br>");

 // v)
 document.write(lastName.previousSibling.nodeName + "<br>");
 document.write(lastName.nextSibling.nodeName + "<br>");

 // vi)
 var email = document.getElementById('email');
 document.write(email.parentNode.nodeName + "<br>");
 document.write(email.nodeType);
  */