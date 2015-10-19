var values= [1,2,3];
var sum = 0;

values.forEach(sumStuff);

function sumStuff (curNum){
	sum += curNum;
}

console.log(sum);

console.log();

function dialouge (speaker){
	return function (speach){
		return speaker + " says \"" + speach + "\"";
	}
}

var duck = {name:"Donald Duck"};
//first parameter set up
duck.speak = dialouge(duck.name);
//second parameter set up
console.log(duck.speak("Hello There"));