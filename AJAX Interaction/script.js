/*************************
* Author: Candis Pike
* Date: November 4, 2015
* Class: CS 290 Fall 2015
****************************/

var apikey = "c35f7751b6a0c62bbcf7a41fb200e2b4";
  
 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
	
document.getElementById("zip").addEventListener('click', function (event){
	var req= new XMLHttpRequest();
	var weather = document.getElementById("zipcode").value;
	req.open("GET","http://api.openweathermap.org/data/2.5/weather?zip="+weather +",us&units=imperial&appid="+apikey, true);
	req.addEventListener("load", function(){
		if(req.status >=200 && req.status < 400){
			var response = JSON.parse(req.responseText);
			document.getElementById("city").textContent = response.name;
			document.getElementById("temp").textContent = response.main.temp;
			document.getElementById("humid").textContent = response.main.humidity;
		}
		else
			console.log("Error in network request: " + request.statusText);
		})
					
	req.send(null);
	event.preventDefault();
})

document.getElementById("loc").addEventListener('click', function (event){
	var req= new XMLHttpRequest();
	var weather = document.getElementById("location").value;
	req.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+weather +"&units=imperial&appid="+apikey, true);
	req.addEventListener("load", function(){
		if(req.status >=200 && req.status < 400){
			var response = JSON.parse(req.responseText);
			document.getElementById("city").textContent = response.name;
			document.getElementById("temp").textContent = response.main.temp;
			document.getElementById("humid").textContent = response.main.humidity;		
		}
		else
			console.log("Error in network request: " + request.statusText);
	})
					
	req.send(null);
	event.preventDefault();
})

document.getElementById("textSub").addEventListener('click',function(){
	var req= new XMLHttpRequest();
	var payload = {postText: null};
	payload.postText= document.getElementById("postText").value;
	req.open("POST", "http://httpbin.org/post", true);
	req.setRequestHeader("Content-type", "application/json");
	req.addEventListener("load", function(){
		if(req.status >=200 && req.status < 400){
			var response = JSON.parse(req.responseText);
			console.log(response);
			document.getElementById("stuff").textContent = response.data;
		}
		else
			console.log("Error in network request: " + request.statusText);
	})
	req.send(JSON.stringify(payload));
	event.preventDefault();
})