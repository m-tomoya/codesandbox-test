// // // /**
// // //  * const let
// // //  */

// // // //  var val1 = "var変数"
// // // //  console.log(val1)

// // // //  val1 = "上書き"
// // // //  console.log(val1)

// // // //  var val1 = "var変数を再宣言"
// // // //  console.log(val1)

// // // let val2 = "let";
// // // // let val2 = "console"

// // // const test = { type: "type", class: "class" };
// // // test.type = "test";
// // // console.log(test);

// // // // const name = "tomo";
// // // const message1 = "mmy name" + name + ".";
// // // console.log(message1);

// // // const message2 = `my name is ${name}.`
// // // console.log(message2)

// // // const func1 = function(str){
// // //   return str
// // // }

// // // console.log(func1("string"))

// // // const func2 = (str)=>{
// // //   return str;
// // // }

// // // const func3 = (str) => str;

// // // console.log(func2("func2"))

// // // console.log(func3("func3"))

// // const myProfile = {
// //   name: "tomo",
// //   age: 28,
// // }

// // const message3 = `my name is ${myProfile.name}. my age is ${myProfile.age}.`
// // console.log(message3)

// // const { name, age } = myProfile;
// // const message4 = `my name is ${name}. my age is ${age}.`
// // console.log(message4)

// // const myProfile = ["tomo", 28]
// // const message3 = `my name is ${myProfile[0]}, my age is ${myProfile[1]}`
// // console.log(message3)

// // const [name, age] = myProfile
// // const message4 = `my name is ${name}, my age is ${age}`
// // console.log(message4)

// // const arr1 = [1,2]
// // console.log(arr1)
// // console.log(...arr1)

// // const sumFunc = (num1, num2) => console.log(num1 + num2)

// // // sumFunc(arr1[0], arr1[1])
// // sumFunc(...arr1)

// const arr2 = [1,2,3,4,5]
// const [num1,num2,...arr3] = arr2
// console.log(num1) // 1
// console.log(num2) // 2
// console.log(arr3) // 3.4.5

//

const nameArr = ["A", "B", "C"];
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

const newNameArr = nameArr.map((name) => {
  if (name === "A") {
    return name;
  } else {
    return `Mr. ${name}`;
  }
});
