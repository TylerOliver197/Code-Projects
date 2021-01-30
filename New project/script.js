//retrieve my table
var table = getElementById("myTable");

function createTable(){
var inputVal = getElementById("noteInput").value

if (inputVal === ""){
    alert("You have to write a note!");
} else {
var tRow = table.insertRow(-1);
var inputText = document.createTextNode(inputVal);
tRow.appendChild(inputText);
}
document.getElementById("noteInput").value = "";
}