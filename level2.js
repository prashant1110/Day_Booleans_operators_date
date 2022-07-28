//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let height=prompt("enter the height :");
let breadth=prompt("enter the base :");

let area=alert("the area is " + 0.5*breadth*height);

//2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let a=prompt("enter the a :") ;
let b=prompt("enter the b :");
let c=prompt("enter the c :");
let trianglePerimeter=Number(a)+Number(b)+Number(c);

alert("Perimetr of triangle :"+trianglePerimeter);

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let height2=prompt();
let breadth2=prompt();
let perimeter=2*(Number(height2)+Number(breadth2));

alert("area of rectangle :" +(height2*breadth2));
alert("perimeter of rectangle :"+ perimeter);


//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius=prompt("enter the radius :");
const pi=3.14;
let areaOfCircle=pi*radius*radius;
let circumferenceOfCircle=2*pi*radius;

alert("area of the circle :"+ areaOfCircle);
alert("circumference of the circle:"+ circumferenceOfCircle);

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2

let x11=prompt("enter x11 :");
let y11=2*x11-2;
let x12=prompt("enter x12 :");
let y12=2*x12-2;

console.log("if x11 is "+x11+" then y11 is "+y11);
console.log("if x12 is "+x12+" then y12 is "+y12);

let slope1=(y12-y11)/(x12-x11);
alert(slope1);


//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1=2;
let x2=6;
let y1=2;
let y2=10;

let slope=(y2-y1)/(x2-x1);
alert("slope is :"+slope);

//7.Compare the slope of above two questions.

if(slope>slope1){
    alert("slope 1 is greater")
}else{
    alert("slope1 is greater");

}

//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//ans=-3.

let x3=prompt("enter the value of x: ");
let y3=(x3*x3)+(6*x3)+9;

alert(y3);

//9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours=prompt();
let rate=prompt();

alert(hours*rate);

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.

let name1=prompt("enter ur name: ");
let length= name1.length;

if(length>7){
    alert("yout name is long");

}else{
    alert("your name is short");
}

//11.Compare your first name length and your family name length and you should get this output.

let firstName=prompt("enter ur firstname :");
let familyName=prompt("enter your familyName :");

if(firstName.length>familyName.length){
    alert("your first name, "+ firstName+"is greater then the famiy name, "+familyName);
}else{
    alert("your first name, "+ firstName+" is smaller then the famiy name, "+familyName);
}

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
let differnce=myAge-yourAge;

alert("i am "+differnce+" older than you");

//13.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let liveAge=prompt("enter the year u live :");
let secondsLive=60*60*24*365*liveAge;

alert(secondsLive);

