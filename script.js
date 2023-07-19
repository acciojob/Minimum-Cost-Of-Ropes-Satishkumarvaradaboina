 
<html>
 
<head>
 
</head>
 
<body>
    <form id="form">
        <label for="rope-lengths">Enter rope lengths:</label>
        <input type="text" id="rope-lengths">
        <button type="button" onclick="calculateMinCost()">Calculate</button>
      </form>
      <div id="result"></div>
 
<script type="text/javascript" src="./script.js"></script>
  
 
</body>
 
</html>
 
 
 
// js part
 
 
function compare(a, b) {
  if (a < b) {
      return -1;
  } else if (a > b) {
      return 1;
  } else {
      return 0;
  }
}
 
 
 
function calculateMinCost() {
  //your code here
  let str=document.getElementById('rope-lengths').value.split(",");
  let arr=str.map((str)=>parseInt(str));
  // console.log(arr);
  
let total=0;
arr=arr.sort(compare);
// console.log("arr ",arr);
while(arr.length>=2){
  let sum=arr[0]+arr[1];
  // console.log(sum);
  let rem=[];
  rem.push(sum);
  for(let k=2;k<arr.length;k++){
    rem.push(arr[k]);
  }
  rem=rem.sort(compare);
  // console.log("rem ",rem);
  arr=[...rem];
  // console.log("arr ",arr);
  total=total+sum;
  // console.log("total "+total+"----------------------");
}
console.log(total);
 
 
let result=document.getElementById('result');
result.innerHTML=total;
}  