//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName="Prashant";
let lastName="Singh";
let country="INDIA";
let city="Ankleshwar";
let age=21;
let isMarried=false;
let year=2000;

console.log(typeof(firstName),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year));

//2.Check if type of '10' is equal to 10

console.log('10'=== 10);

//3.Check if parseInt('9.8') is equal to 10

let num1=parseInt('9.8');
let num2=10;

console.log(num1==num2);

//4.Boolean value is either true or false.

//i.Write three JavaScript statement which provide truthy value.
console.log(3>2);
console.log("one".length=="two".length);
console.log(3+2 == 2+3);

//ii.Write three JavaScript statement which provide falsy value.
console.log('3'===3);
console.log('2+3'==2+3);
console.log(2>3);

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4>3);
console.log(4 >= 3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//6.Use the Date object to do the following activities

//i.What is the year today?
let year1=new Date();
console.log(year1.getFullYear());

//ii.What is the month today as a number?
let month=new Date();
console.log(month.getMonth());

//iii.What is the date today?
let date=new Date();
console.log(date.getDate());

//iv.What is the day today as a number?
let day=new Date();
console.log(day.getDay());

//v.What is the hours now?
let hour=new Date();
console.log(hout.getHours());

//vi.What is the minutes now?
let minute=new Date();
console.log(minute.getMinutes());



