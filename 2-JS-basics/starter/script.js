// // /*****************************
// // * Variables and data types
// // /*

// // var firstName = 'John';
// // console.log(firstName);

// // //Number
// // var lastName = 'Smith';
// // var age = 28;


// // //Boolean
// //  var fullAge = true;
// //  console.log(fullAge);


// //  //undefined
// //  var job; 
// //  console.log(job);

// // job = 'Teacher';
// //  console.log(job);

// // //Variable naming rules
// //  var _3years = 3;
// //  var johnMark = 'John and Mark'
// //  var if = 23;


// //  /*********************************
// //   * Variable mutation and type coercion
// //   */

// // // var firstName = 'John';
// // // var age = 28;

// // // console.log(firstName + ' ' + age);

// // // //Type conversion
// // //  var job, isMarried;
// // //  job = 'teacher';
// // //  isMarried = false;

// // //  console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried);

// // // //Variable mutation
// // // age = 'twenty eight';
// // // job = 'driver';
 
// // // alert(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried);

// // // var lastName = prompt('What is his last Name?');
// // // console.log(firstName + ' ' + lastName);

// // /**********************************
// //  * Basic Operaturs
// //  */
// // var year, yearJohn, yearMark;
// // now = 2018;
// // ageJohn = 28;
// // ageMark = 33;

// // //Math Operators
// // yearJohn = now - ageJohn;
// // yearMark = now - ageMark;

// // console.log(yearJohn);

// // console.log(now + 2);
// // console.log(now * 2);
// // console.log(now / 10);
     
// // //Logical operators
// // var johnOlder = ageJohn < ageMark;
// // console.log(johnOlder);

// // //typeof operator
// // console.log(typeof johnOlder);
// // console.log(typeof ageJohn);
// // console.log(typeof 'Mark is older that John');
// // var x;
// // console.log(typeof x);

// // /********************************** * Operator precendence 
// // */

// // var now = 2018;
// // var yearJohn = 1989;
// // var fullAge = 18;

// // //Multiple operators
// // var isFullAge = now - yearJohn >= fullAge; //true
// // console.log(isFullAge);

// // //Grouping
// // var ageJohn = now - yearJohn;
// // var ageMark = 35;
// // var average = (ageJohn + ageMark) / 2;
// // console.log(average);

// // //Multiple assignments
// // var x, y;
// // x = y = (3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 -6 // 26
// // console.log(x,y);

// // //More Operators

// // x = x * 2;
// // console.log(x);
// // x += 10;
// // console.log(x);
// // x--;
// // console.log(x);

// // /***********************************
// //  Coding Challenge
// //  */


// // //  var massMark = 78;
// // //  var heightMark = 1.69;
 
// // //  var massJohn = 92;
// // //  var heightJohn = 1.95;

// // //  var BMIMark = massMark / (heightMark * heightMark);
// // //  var BMIJohn = massJohn / (heightJohn * heightJohn);
// // //  console.log(BMIMark, BMIJohn);

// // // var markHigherBMI = BMIMark > BMIJohn;
// // // console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);

// // /**********************************
// //  If / else statements  Conditionals
// //  */

// //  var firstName = 'John';
// //  var civilStatus = 'Single'

// //  if (civilStatus === 'married') {
// //    console.log(firstName + 'is married')
// //  } else {
// //    console.log(firstName + 'will hopefully marry soon :-)')
// //  }

// //  var isMarried = true;
// //  if (isMarried) {
// //   console.log(firstName + 'is married')
// // } else {
// //   console.log(firstName + 'will hopefully marry soon :-)')
// // }


// // //  var massMark = 78;
// // //  var heightMark = 1.69;
 
// // //  var massJohn = 92;
// // //  var heightJohn = 1.95;

// // //  var BMIMark = massMark / (heightMark * heightMark);
// // //  var BMIJohn = massJohn / (heightJohn * heightJohn);
 
// // // if (BMIMark > BMIJohn) {
// // //   console.log('Mark\ BMI is higher than John\'s');
// // // } else 
// // //   console.log('John\' BMI is higher than Marks\'s')

// // /**********************************
// // Boolean Logic
// //  */

// // //  var firstName = 'John';
// // //  var age = 20;

// // //  if (age < 13) {
// // //    console.log(firstName + ' is a boy');
// // //   else if (age >= 13 && ) 
// // //  }

// /***********************************
//  Ternary Operators and Switch statements (Alternative to if else statement.)
//  */

// //  3 operates/parts interact with the operator. 

// var firstName = 'Lisa';
// var age = 16;

// age >= 18 ? console.log(firstName + ' drinks wine. ')
// : console.log(firstName + ' drinks soda pop! ')

// var drink =  age >= 18 ? 'wine' : 'pop';
// console.log(drink);

// // this is the same as above
// /*(if age >= 18) {
//     var drink ='beer';
// } else {
//     var drink = 'juice';
// }*/

// // Switch Statement
// var job = 'instructor';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drivers for uber in Chicago.');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//     default:
//       console.log(firstName + ' does something else.');

// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy');
//     break;
//     case age >= 13 && age < 20:
//       console.log(firstName + ' is a teenager.');
//       break;
//       case age >= 20 && age < 30
// }

/***********************************
 Truthy and Falsy values and equality operators 
 */

 // falsy values: undefined, null, 0, '', NaN
 //truthy values: NOT falsy values 

 var height;

 height = 23;

 if (height || height === 0) {
   console.log('variable is defined');
 } else {
   console.log('variable has NOT been defined!');
 }

 //Equality operators

 // best practice is to use 3 equal signs. if 2 is used javascript will automatically convert. 

 
 if (height === '23') {
   console.log('The == operator does type coercion!');
 }


