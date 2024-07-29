const arr = [1,2,3,4,5,6,7,8];

const result1 = arr.filter((item)=>item%2===0).map((item)=>item*3);
const result2 = arr.reduce((acc,current)=>{
    if(current%2===0){
        acc.push(current*3);
    }
    return acc;
},[])

console.log("result1:",result1);
console.log("result2:",result2);