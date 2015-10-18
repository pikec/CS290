function deepEqual (x, y){
	//check if types are the same
	if (typeof x != typeof y)
		return false;
	
	//check for null and if it is an object	
	if ( x == null || typeof x != "object" ||  y == null || typeof y != "object")
		return x===y;
		
	//count the properties of the object	
	var xPropCount = 0;
	var yPropCount = 0;
	
	for (var prop in x) {
		xPropCount =+ 1;
	}
	
	for (var prop in y) {
		yPropCount =+ 1;
	}
	
	//if object x and y do not have the same # of properites
	if (xPropCount != yPropCount)
		return  false;
		
	//check if properites of each object are equal
	for (var prop in x){
		if (!deepEqual(x[prop], y[prop]))
			return false;
		
		return true;
	}
}

//test data
var obj1 = {here: {is: "an"}, object: 2};
var obj2 = {here: 1, object: 2};
var obj3 = {here: null, object: 2};
var obj4 = {here: {is: "an"}, object: 2};

var test1 = 5;
var test2 = 4;
var test3 = null;
var test4 = "and";
var test5 =5;

console.log("Results");
console.log(deepEqual(obj1,obj1));
console.log(deepEqual(obj1,obj2));
console.log(deepEqual(test1,test2));
console.log(deepEqual(test1,test3));
console.log(deepEqual(test1,test4));
console.log(deepEqual(test1,test5));
console.log(deepEqual(test3,test4));
console.log(deepEqual(obj2,test3));
console.log(deepEqual(obj1,obj4));


