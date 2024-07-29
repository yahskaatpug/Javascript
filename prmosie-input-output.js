let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

promise
    .then(result => {
        console.log(result); // (1)
        return result + " processed";
    })
    .then(result => {
        console.log(result); // (2)
    })
    .catch(error => {
        console.log(error); // (3)
    });

    //==================


    function syncOperation() {
        console.log("Synchronous operation start");
        for (let i = 0; i < 3; i++) {
            console.log(`Synchronous loop ${i}`);
        }
        console.log("Synchronous operation end");
    }
    
    function asyncOperation() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Asynchronous operation complete");
            }, 500);
        });
    }
    
    async function main() {
        console.log("Start of async function");
    
        const result = await asyncOperation();
        console.log(result);
    
        console.log("End of async function");
    }
    
    console.log("Start of script");
    
    syncOperation();
    
    main();
    
    console.log("End of script");
//====================

console.log("Start of script");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise then 1");
    })
    .then(() => {
        console.log("Promise then 2");
    });

console.log("End of script");

//=================

const pp = () =>
    new Promise((reply, reject) => { 
        console.log("hi");
      reply("Done");
      reject("Not Done");
      console.log("hello");
      reply("Again done");
    });

  pp()
    .then((data) => console.log("Data:", data))
    .catch((err) => console.log("Err: ", err));

    //=====================

    const p = () =>
        new Promise((reply, reject) => {
          setTimeout(() => {
            reply({ msg: "Done", counter: 1 });
          }, 3000);
        });
    
      p()
        .then((data) => {
          console.log("First Data:", data);
          const counter = data.counter + 20;
          return counter;
        })
        .then((nextThenResult) => {
          console.log("Second nextThenResult: ", nextThenResult);
        })
        .then((data) => {
          console.log("Third data.counter:", data);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });

 ////=======================

 const p1 = () =>
    new Promise((reply, reject) => {
      setTimeout(() => {
        reply({ msg: "Done", counter: 1 });
      }, 1000);
    });

  p1()
    .catch((err) => {
      console.log("1 Error: ", err);
      return "PhirSeShuruKar";
    })
    .then((data) => {
      console.log("2. Data: ", data);
    })
    .then((data) => {
      console.log("3. Data: ", data);
    })
    .then((data) => {
      console.log(a + b + b + d);
      console.log("4. Data: ", data);
    })
    .catch((err) => {
      console.log("5. Error: ", err);
      return "PhirSeShuruKar";
      //throw "Error";
    })
    .catch((err) => {
      console.log("6. Error: ", err);
      return "PhirSeShuruKar";
    })
    .then((data) => {
      console.log("7. Data: ", data);
    })
    .catch((err) => {
      console.log("8. Error: ", err);
    });

