const input = [1,2,3,4,5];


// const newArr = input.map( function(e){
//     return e*2;
// })

// console.log(newArr);

function cb(e){
    return e*3;
}

function myOwnMap(arr,cb){
    let newArr =[];
    for (let i = 0; i < arr.length; i++) {
       newArr.push(cb(arr[i]));
        
    }
    return newArr;
}

console.log(
 myOwnMap(input,cb));

