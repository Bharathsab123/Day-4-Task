//1,Print odd numbers in an array
const arr=[1,2,3,4,5,6,7,8,9,];
let oddvalue= function(){
const odd=[]
for(const num of arr){
if(num%2===1){odd.push(num)}}
console.log(odd)}
oddvalue();

//---------------------------------------------------------------------------------

//2,Convert all the strings to title caps in a string array
function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}

	return str.join(' ');
}
console.log(titleCase("my name is bharath"));
//----------------------------------------------------------------------------------

//3,Sum of all numbers in an array
let arr1=[1,2,3,4,5]
function sum(arr1){
     let a =0;
    for(const num of arr1){
       a += num}
       return a

}
console.log(sum(arr1))
//-----------------------------------------------------------------------------------

//4,Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let primeNumber = function(){
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);}
primeNumber()
//-----------------------------------------------------------------------------------

//5,Return all the palindromes in an array
var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
let palindromes =function(){
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
//--------------------------------------------------------------------------------------------

//6,Return median of two sorted arrays of the same size.

function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
     console.log("Doesn't work for arrays of unequal size");
//----------------------------------------------------------------------------------------

//6,Remove duplicates from an array
let chars = ['A', 'B', 'A', 'C', 'B'];
function dublicate(){
dupChars = chars.filter((r, index) => {
    return chars.indexOf(r) !== index;
});

console.log(dupChars);}
dublicate();
//-----------------------------------------------------------------------------------------
//8,Rotate an array by k times
let rotate= function(){
var arr22=[1,2,3,4,5],k=4;
for(var i=k;i<arr22.length;i++)
 arr22.unshift(arr22.pop());
 console.log(arr22);}
 rotate()

 