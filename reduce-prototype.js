Array.prototype.myReduce = function(cb){
    let sum =0;
    this.forEach((item)=>{
        sum=  cb(item,sum);
    })

    return sum;
}

let arr = [1,2,3,4,5,6,7,8];

function cb(num,sum){
    return num+sum; 
}

const result = arr.myReduce(cb);
console.log("reduced array:", result);