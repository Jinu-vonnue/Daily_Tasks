/*

1. Write a function deepClone(obj) that creates a deep copy of an object. The copy should not 
have any references to the original object or its nested parts

*/ 



let obj1 = {
  name: "JavaScript",
  country: "US",
  dataTypes: [
    "string",
    "number",
    "boolean",
    "object",
    "null",
    "undefined",
    ["sample1", "sample2"],
  ],
  place: {
    place1: "kottayam",
    place2: "Kochi",
  },
  phno:{
    ph1:"No1",
    ph2:"No2",
    ph3:{
      valid1:"valid1",
      valid2:"valid2"
    }
  }
};

let objNew = deepClone(obj1);

function deepClone(obj) {
  let temp = {};
  for ([key, value] of Object.entries(obj)) {
    if (typeof obj[key] === "object" && !Array.isArray(value)) {
      temp[key] = deepClone(obj[key]);
    } else if (Array.isArray(value)) {
      let tempArray = arrClone(value);

      function arrClone(value) {
        let tempArr = [];
        for (item of value) {
          if (typeof item == "object") {
            tempArr.push(arrClone(item));
          } else {
            tempArr.push(item);
          }
        }
        return tempArr;
      }

      // let tempArr = [];
      // for(item of value){
      //   tempArr.push(item);
      // }
      // temp[key]=tempArr;
      temp[key] = tempArray;
    } else {
      temp[key] = value;
    }
  }
  return temp;
}
console.log(objNew);

// TESTING

objNew.place.place1 = "Wayanad"; //the nested object key "place1" value of new object is changed
console.log(objNew.place.place1);
console.log(obj1.place.place1); //place1 value of original object has no change
objNew.dataTypes[6].push("sample3"); // the nested object dataTypes array value is changed in new object
console.log(objNew.dataTypes);
console.log(obj1.dataTypes); //the nested object dataTypes array value of original object is not changed



objNew.phno.ph1="No10";    //new object nested value is changed
console.log(objNew);
console.log(obj1);

objNew.phno.ph3.valid2="Valid5";    //new object nested value is changed
console.log(objNew);
console.log(obj1);


//Original object 
console.log("Original Object :")
console.log(obj1)


//New object
console.log("New Object :")
console.log(objNew)