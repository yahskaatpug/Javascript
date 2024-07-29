
  const profile = {
    name: "Arun",
    city: "Hyderabad",
    metadata: {
      isWorking: true,
      isMarried: false,
      innerData: {
        isActive: true,
        navdeep: {
          state: "Rajasthan",
        },
      },
    },
  };

  const cloneObject = (data) => {
    let result = {};

    for (let key in data) {
      if (typeof data[key] === "object") {
        // meta //innerdata
        const output = cloneObject(data[key]);
        console.log("Output before result: ", output);
        result = { ...result, [key]: output };
        console.log("Output after result: ", output);
      } else {
        // name, city
        result[key] = data[key];
      }
    }

    return result;
  };

  const objCp = cloneObject(profile);
  objCp.metadata.isMarried = true;
  objCp.metadata.innerData.isActive = false;
  objCp.metadata.innerData.hasBankAccount = true;

  console.log("objCp: ", objCp);
  console.log("profile: ", profile);
