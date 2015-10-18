console.log("Activity 2 functions.");

//show that functions can be anywhere and work example 1
//function before call
console.log("function before call");
function addNums (x, y) {
	return x+y;
}
var addedNum = addNums(3,2);
console.log(addedNum);

//function after call
console.log("function after call");
var subbedNum = subNums(3,2);

console.log(subbedNum);

function subNums(q,r) {
	return q-r;
}

//if function assigned to variable it must be defined first to be used
//function assigned to variable before call
console.log("variable declare before call");
var beforeCall = function multNums(g,h){ 
	return g*h;
}

console.log(beforeCall(3,2));

//function assigned to variable after call
console.log("variable declare after call");
console.log (afterCall(4,2));

var afterCall = function divNums(m,n){
	return m/n;
}