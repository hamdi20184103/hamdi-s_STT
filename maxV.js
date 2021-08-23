
    let arr = [5,78,36,84,74,15,3];
    let maxV = arr[0] , posi = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxV){
           posi = [i];
           maxV = arr[i];
        }
        //for(let max in arr)
        //console.log(arr[max]);
    }

console.log(posi);
console.log(maxV); 



