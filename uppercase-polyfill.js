String.prototype.upperCase = function(){
    let result="";
    for(let i=0;i<this.length;i++){
        let tmp1 = this.charCodeAt(i);
        if(tmp1>=97 && tmp1<=122){
            result = result+String.fromCharCode(tmp1-32);
        }
    }
    return result;
}

let name = "akshay";
console.log("name:", name.upperCase())