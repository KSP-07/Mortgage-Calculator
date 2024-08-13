
// function outer(){
    
//     console.log(a);
//     function inner(){
//         var a = 10;
//     }
//     return inner;
// }

// outer()();

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a ,b);
//         }
//         return y;
//     }
//     return x;
// }
// var k = z();

// console.log(k);
// k();


function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();


var counter2 = counter();
counter2();

const arr = [1 ,2 ,6 , 4, ,5 ];


const output = arr.reduce((max , curr)=>{
 
    if(curr > max) max = curr;
    return max;
} , 0)

console.log(output)