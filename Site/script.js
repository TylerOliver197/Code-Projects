//retrieve my table


function createTable(){
var inputVal = document.getElementById("noteInput").value;

if (inputVal === ""){
    alert("You have to write a note!");
} else {
    var table = document.getElementById("myTable");
    var tRow = table.insertRow(0);
    var tText = document.createTextNode(inputVal);
    tRow.appendChild(tText);
 
    document.getElementById("noteInput").value = "";
}
}