function plusminus(arr){           //arr=[]
    let n=arr.length;
    let zeroCount=0;
    let positiveCount=0;
    let negativeCount=0;

    for(let i=0;i<n;i++){
        if(arr[i]===0){
            zeroCount++
        }
        else if(arr[i]>0){
            positiveCount++
        }
        else {
            negativeCount++
        }
    }
console.log((positiveCount/n).toPrecision(6));
console.log((negativeCount/n).toPrecision(6));
console.log((zeroCount/n).toPrecision(6));


}

plusminus([2,1,0,-1,-3])