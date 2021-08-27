setTimeout(()=> {let n = 5; console.log(3);
setTimeout(()=> {console.log(2); 
setTimeout(()=> {if(n > 5 || n ===!5)
{ console.log(6); }
else{console.log(4)} console.log(5);});} , 1000); console.log(1);} , 0 ); 

//the output will be 
//3
//1
//2
//4
//5
//Considering that the console.log of 2,4,5 were part of the setTimeOut 1000, and the 3,1 had a setTimeOut of 0, thats why
//they appeared first. The 4 was printed instead of the 6 because the n = 5 in the first setTimeOut.