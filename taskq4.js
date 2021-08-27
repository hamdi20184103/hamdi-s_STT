//Q4.1)
function sumObjectValues(arr){
    let sum4 = 0; 
for(let i=0 ; i<arr.length; i++){

    sum4+=arr[i];
}
return sum4;
}
console.log("The sum of the given numbers is " + sumObjectValues(arr = [ 5 , 9 , 7 , 5 , 7 ]));


//Q4.2)


//Q4.3)
function time(nBefore24){
let numAfter24 = 0;
if(nBefore24 >= 0 && nBefore24 <= 12){
   numAfter24 = nBefore24 + 12;
}
return numAfter24;
}
console.log("The time given is " + time(11));


//Q4.4)
    let diffMonth1 = 7;
    let diffMonth2 = 3;
    let diffDay1 = 28;
    let diffDay2 = 11;
    let resultMonth = 0;
    let resultDay = 0;
    if(diffMonth1 > 0 && diffMonth1 <= 12 && diffMonth2 > 0 && diffMonth2 <= 12){
        if(diffDay1 > 0 && diffDay1 <= 30 && diffDay2 > 0 && diffDay2 <= 30){
            resultMonth = (diffMonth1 - diffMonth2) * 30;
            resultDay = resultMonth - (diffDay1 - diffDay2);
        }
    }
    console.log("The number of days is " + resultDay);


//Q4.5)
//On another file on github because i solved it a while back; file name is "maxV".

