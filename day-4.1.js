//------------- arrow functions-----------------------

//1,Print odd numbers in an array
const arr=[1,2,3,4,5,6,7,8,9,];
let oddvalue=()=>{
const odd=[]
for(const num of arr){
if(num%2===1){odd.push(num)}}
console.log(odd)}
oddvalue();
//--------------------------------------------------------------

//2,Convert all the strings to title caps in a string array
let titleCase =(str)=> {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}

	return str.join(' ');
}
console.log(titleCase("my name is bharath"));
//------------------------------------------------------------------

//3,Sum of all numbers in an array
let ary=[1,2,3,4,5,6,7,8]
let findslum= (ary)=>{
    let sum=0
    for(let val of ary){sum+= val}
    return sum}

console.log(findslum(ary))
//-------------------------------------------------------------------

//4,Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let primeNumber =()=>{
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);}
primeNumber()
//-----------------------------------------------------------------------

//5,Return all the palindromes in an array
var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
let palindromes =()=>{
var arr11 = [];
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");
console.log(pal);
for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}


console.log(arr);}
palindromes();
//---------------------------------------------------------------------------