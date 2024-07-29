function parent() {
    let a = 10;
    var b = 20;
    const c = 200;

    function child() {
      let a1 = "Arun";
      console.log("Values inside Child: ", { a, b, a1 });
    }

    return child;
  }

  // What runner will store?
  const runner = parent();

  // const runner = function child() {...}

  //console.log("Runner: ", runner);

  runner();