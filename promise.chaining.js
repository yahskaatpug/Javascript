// Define a promise which should reply " Akshay "
// - Inside first , trim the string & return
// - Inside second, replace the "a" with "_" & return
// - Inside third, uppercase the string & return
// - Inside catch show error


// promise chaining
const  p = ()=> new Promise((reply)=>{
    reply(" Akshay ");
})

p().then((data)=>{
    return data.trim();
}).then((data)=>{
    return data.replaceAll("a","_");
}).then((data)=>{
    const result = data.toUpperCase();
    console.log("result:",result);
}).catch((err)=>{
    console.log("error:",err);
})

const chaining  = async()=>{
    try{
    let data = await p();
    let result = data.trim().replaceAll("a","_").toUpperCase();
    console.log("result:", result);
    }
    catch(err){
        console.log("error",err);
    }
}

chaining();