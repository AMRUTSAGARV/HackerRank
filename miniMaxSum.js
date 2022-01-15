function miniMaxSum(arr){
    let smallNum=0;
    let largeNum=0;
    for (let i=0;i<arr.length;i++){
        let maths=arr.splice(1);
        console.log(maths);
        if (maths > largeNum)largeNum=maths;
        if (maths < smallNum) smallNum = maths;
  }
  return (smallNum, largeNum);
    }
miniMaxSum([1,2,3,4,5,]);