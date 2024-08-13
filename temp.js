
const fs = require('fs');

function readFile(filePath , callBack){
    fs.readFile(filePath, 'utf8' , (err , data)=>{
        if(err){
            console.log(`Error reading file from disk: ${err}`);
        }
        else{
            callBack(data); 
        }
    })
}

function processFileData(data) {
    const start = performance.now();

    const lines = data.trim().split('\n'); // Split data into lines
    const a = lines.slice(0, 25000); // First half of the lines
    const b = lines.slice(25000); // Second half of the lines

  function insertInMap(mp, arr) {
    for (const item of arr) {
      if (!mp[item]) mp[item] = 1;
    }
  }

  function compAdd(mp, ans) {
    for (const [key, value] of Object.entries(mp)) {
      if (value === 1) ans.push(key);
    }
  }

  function print(arr) {
    console.log("\n\n")
    console.log("\n\n")
    console.log(arr.join(", "));
    console.log("\n\n")
  }

  function solve(ans1, ans2, arr1, arr2) {
    let mp1 = {};
    let mp2 = {};

    insertInMap(mp1, arr1);
    insertInMap(mp2, arr2);

    for (const item of arr2) {
      if (mp1[item] === 1) {
        mp1[item]++;
      }
    }

    for (const item of arr1) {
      if (mp2[item] === 1) {
        mp2[item]++;
      }
    }

    compAdd(mp1, ans1);
    compAdd(mp2, ans2);
  }

  // function main(){
  //     let a =[];
  //     let b = [];
  //     let n = parseInt(prompt("Enter the size of array 1:"));
  //     let m = parseInt(prompt("Enter the size of array 2: "));

  //     console.log("Enter string values for array 1: ");
  //     takeInput(n , a);

  //     console.log("Enter the string values of array 2: ");
  //     takeInput(m , b);

  //     let A_B = [];
  //     let B_A = [];

  //     solve(A_B, B_A, a , b);

  //     console.log("Set difference A-B is : ");
  //     print(A_B);

  //     console.log("Set Difference B-A is : ");
  //     print(B_A);
  // }

  // main();


  const A_B = [];
  const B_A = [];

  solve(A_B, B_A, a, b);

  console.log("\n\nSet difference A-B is:");
  print(A_B);
  console.log("\n\nSet difference B-A is:");
  print(B_A);

  console.log("Succefully executed!")

  const end = performance.now();


  console.log(`Function A took ${end - start} milliseconds.`);
}



readFile("input.txt", processFileData);

// const end = performance.now();

