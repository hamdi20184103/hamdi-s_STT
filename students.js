// let students = ["Ali", "Omar" , "Essam" , "Eisa" ];

// console.log(students); 

//function evenOrOdd (...numbers){
//    for(let num of numbers){
//        if(num % 2 === 0)
//        return "even";
//        else
//        return "odd";
//    }
//    console.log(evenOrOdd(5 , 2 , 9 , 65 , 42 ));
//}


//1)

let num =[5,2,9,65,42]
for(let i=0; i<num.length; i++)
{
  if(num[i]%2===0)
   {
    console.log("Even");
   }
  else
   {
    console.log("Odd");
   }
}


//2)

for(let i=1; i<=20; i++){
let answer = i%2===0 && i%4===0 ? "FizzBuzz" : i%2===0 ? "Fizz" : i%4===0 ? "Buzz" : i;
console.log(answer)
}


//3)

//message = "Welcome!";
//message.split('').reverse().join('');


//4)

let rad = 7;

let area = 3.14* rad* rad;
console.log('Q4) The Area of The given Radius is ' + area );
let circ = 2 * 3.14 * rad;
console.log('The Circumference of The given Radius is ' + circ );


//5)

let x = 27;
let y = 23;
let sum=x+y;

let res = x === 50 ? "Q5) True, x = 50" : y === 50 ? "Q5) True, y = 50" : sum === 50 ? "Q5) True. Their sum is equal 50" : "Q5) false";
console.log(res);


//6)


let x6 = -125;
let y6 = -97;
let resx6 = x6 > 0 ? "Q6) x is Positive" : x6 < 0 ? "Q6) x is Negative" : "Q6) x is Probably 0";
let resy6 = y6 > 0 ? "Q6) y is Positive" : y6 < 0 ? "Q6) y is Negative" : "Q6) y is Probably 0";
console.log(resx6);
console.log(resy6);


//7)

let x7 = 50;
if(x7 > 0)
    {
      if(x7 % 5===0)
      {
          console.log("Q7) Multiple of 5");
      }
      else if(x7 % 8===0)
      {
          console.log("Q7) Multiple of 8");
      }
      else
      {
          console.log("Q7) Neither a Multiple of 5 nor 8");
      }
    }

else
{
    console.log("Q7) Not Positive");
}



//8)

let x8 = 48, y8 = 91, z8=23;
console.log(x8 , y8 , z8);
if(x8 > y8 && x8 > z8)
{
console.log("Q8) " + x8 + " is the largest Number");
}
else if(y8 > x8 && y8 > z8)
{
console.log("Q8) " + y8 + " is the largest Number");
}
else if(z8 > y8 && z8 > x8)
{
console.log("Q8) " + z8 +" is the largest Number");
}
else
{
console.log("Q8) None is the largest of those Integers");
}


//9)


let sum9 = 0;
for(let i = 1; i<=10; i++)
{
    sum9+=i;
}
console.log("Q9) The Sum is " + sum9);


//10)

let noOfCol = 5;
for(let i=0; i<=5; i++)
{
    for(let j=0; j<i; j++)
    {
        console.log("*");
    }
    console.log('\n');
}


//11)

let x11 = 70;
let resx11 = x11 > 0 ? "Q11) The integer is a Positive Number." : x11 < 0 ? "Q11) The Integer is a Negative Number" : "Q11) The Integer is Zero";
console.log(resx11);


//12)

// dont know how


//13)

let x13 = 7;
let y13 = 10;
let sum13 = x13 + y13;
console.log("Q13) The sum of the two Integers is : " + sum13);


//14)

let f14 = 5;
for(let i=f14 - 1; i>=1; i--)
{
   f14 = f14*i;
}
console.log("Q14) The Factorial of this number is " + f14);


//15)

let operation1 =('*');
let operation2 =('/');
let operation3 =('+');
let operation4 =('-');
let x15 = 12;
let y15 = 6;
if(operation1 === '*')
{
    let res15m = x15*y15;
    console.log("Q15 The answer is " + res15m);
}
else if(operation2 === '/')
{
     res15d = x15/y15;
     console.log("Q15 The answer is " + res15d);
}
else if(operation3 === '+')
{
     res15a = x15+y15;
     console.log("Q15 The answer is " + res15a);
}
else if(operation4 === '-')
{
     res15s = x15-y15;
     console.log("Q15 The answer is " + res15s);
}
else 
{
    console.log("Error");
}

//console.log("Q15 The answer is " + res15);

