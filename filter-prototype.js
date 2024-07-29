Array.prototype.myFilter = function(cb){
    const res = [];
    this.forEach((item)=>{
        const data = cb(item);
        if(data)
            res.push(item);
    })

    return res;
}

let arr = [1,2,3,4,5,6,7,8];

function cb(a){
    return a%2===0; 
}

const result = arr.myFilter(cb);
console.log("filtered array:", result);