/*******************************************
** author: Candis Pike
** class: CS 290 Fall 2015
** date: October 30, 2015
** description: javascript file for table and buttons
*******************************************/

//create table
var body = document.getElementsByTagName("body")[0];
var jsTable = document.createElement("table");
var jsTbody = document.createElement("tbody");
jsTable.id = "javaTable";

//create header row
var jsHead = document.createElement("tr");

function createTable() {
    //for header row
    for (var i = 1; i < 5; i++) {
        var jsHcell = document.createElement("th");
        var jsHtext = document.createTextNode("Header " + i);
        jsHcell.style.outline = "solid 1px";

        jsHcell.appendChild(jsHtext);
        jsHead.appendChild(jsHcell);
        jsTbody.appendChild(jsHead);
        jsTable.appendChild(jsTbody);
    }

    //for non-header rows
    for (var k = 1; k < 4; k++) {
        var jsRow = document.createElement("tr");
        for (var j = 1; j < 5; j++) {
            var jsCell = document.createElement("td");
            var jsText = document.createTextNode(k + "," + j);
            jsCell.id = 10 * k + j + "Cell";
            jsCell.style.outline = "solid 1px";

            jsCell.appendChild(jsText);
            jsRow.appendChild(jsCell);
            jsTbody.appendChild(jsRow);
            jsTable.appendChild(jsTbody);
        }
        jsTable.setAttribute("border", "2");
    }
}

//create buttons
function createButtons() {
    var navB = ["Up", "Down", "Left", "Right", "Mark Cell"];
    for (var i = 0; i < navB.length; i++) {
        var newButton = document.createElement("input");
        newButton.setAttribute("type", "button");
        newButton.setAttribute("value", navB[i]);
        newButton.id = navB[i];
        document.body.appendChild(newButton);
    }
}


//navigation functions 
function up() {
    if (current.id != "11Cell" && current.id != "12Cell" && current.id != "13Cell" && current.id != "14Cell") {
        for (var i = 0; i < cells.length; i++) {
            if (current.id == cells[i].id) {
                var prev = current;
                prev.style.outline = "solid 1px";
                current = cells[i-4];
                current.style.outline = "solid 5px";
             	return;
            }
        }
    }
 }

function down() {
    if (current.id != "31Cell" && current.id != "32Cell" && current.id != "33Cell" && current.id != "34Cell") {
        for (var i = 0; i < cells.length; i++) {
            if (current.id == cells[i].id) {
                var prev = current;
                prev.style.outline = "solid 1px";
                current = cells[i+4];
                current.style.outline = "solid 5px";
             	return;
            }
        }
    }                
            
}

 function right() {
   if (current.id != "14Cell" && current.id != "24Cell" && current.id != "34Cell") {
        for (var i = 0; i < cells.length; i++) {
            if (current.id == cells[i].id) {
                var prev = current;
                prev.style.outline = "solid 1px";
                current = cells[i+1];
                current.style.outline = "solid 5px";
             	return;
            }
        }
    }
}

function left() {
    if (current.id != "11Cell" && current.id != "21Cell" && current.id != "31Cell") {
        for (var i = 0; i < cells.length; i++) {
            if (current.id == cells[i].id) {
                var prev = current;
                prev.style.outline = "solid 1px";
                current = cells[i-1];
                current.style.outline = "solid 5px";
             	return;
            }
        }
    }
}

//cell marking function
    function mark() {
        if (current.style.backgroundColor != "yellow") current.style.backgroundColor = "yellow";
    }

//create the actual table and buttons and set the events
createTable();
document.body.appendChild(jsTable);

createButtons();

var current = document.getElementById("11Cell");
current.style.outline = 'solid 5px';
var cells = javaTable.getElementsByTagName("td");

document.getElementById("Up").addEventListener("click", up);
document.getElementById("Down").addEventListener("click", down);
document.getElementById("Left").addEventListener("click", left);
document.getElementById("Right").addEventListener("click", right);
document.getElementById("Mark Cell").addEventListener("click", mark);  
