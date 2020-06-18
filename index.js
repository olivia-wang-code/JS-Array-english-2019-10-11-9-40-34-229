// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
function isArrayOrNot(arr){
    if(Array.isArray(arr)==true){
        console.log("是数组");
    }
    else{
        console.log("不是数组");
    }
}
isArrayOrNot(a);
isArrayOrNot(b);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
function doubleArray(arr) {
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
console.log(doubleArray(a));
// TODO should output [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join());

//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
function compare(val1,val2){
    if(val1 < val2){
       return -1;
    }
    else if(val1 > val2){
       return 1;
    }
    else{
       return 0;   
    }
}
console.log(a.sort(compare).reverse());
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function GetArrayMost(arr){
    var arrMap = new Map();
    var key = arr[0],
        value = 1;
    arr.forEach((item, index) => {
      if (arrMap.get(item) !== undefined) {
        let num = arrMap.get(item);
        arrMap.set(item, ++num);
      } else {
        arrMap.set(item, 1);
      }
      if (arrMap.get(item) > value) {
        key = item;
        value = arrMap.get(item);
      }
    });
    return key;
}
console.log(GetArrayMost(a))