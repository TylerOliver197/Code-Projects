function createList(){


    //Define Variables

    var li = document.createElement("LI");
    var inputVal = document.getElementById("noteInput").value;
    var titleVal = document.getElementById("titleInput").value;
    var maxStringLength = 120;
    var maxTitleLength = 30;
    var span = document.createElement("SPAN");
    span.className = "span";


    //if statement to append inputVal to li

if (inputVal.length > maxStringLength) {
    var myTruncatedString = inputVal.substring(0, maxStringLength) + "...";
    var truncatedTxt = document.createTextNode(myTruncatedString);
    li.appendChild(truncatedTxt);

    var btn1 = document.createElement("BUTTON");
    var btn1Txt = document.createTextNode("See More");
    btn1.className = "seeMoreBtn";
    btn1.appendChild(btn1Txt);
    li.appendChild(btn1);

    btn1.onclick = function() {
        alert(inputVal);
    }
} else {
    var txt = document.createTextNode(inputVal);
    li.appendChild(txt);
}


    //if statement to append titleVal to span

if (titleVal.length > maxTitleLength) {
    alert("Make sure your title is under " + maxTitleLength + " characters!");
} else {
    var titleTxt = document.createTextNode(titleVal);
    span.appendChild(titleTxt);
}


    //if statement to create alerts

if (inputVal === "" || titleVal === ""){
    alert("You have to create a title AND and note!");
} else {
    document.getElementById("myUL").appendChild(li);
}


    //Create a close button

    var btn = document.createElement("BUTTON");
    var btnTxt = document.createTextNode("\u00D7");
    btn.className = "close";
    btn.appendChild(btnTxt);
    span.appendChild(btn);
    li.appendChild(span);


    //create the functionality of the close button//

    var close = document.getElementsByClassName("close");
for (var i=0; i<close.length; i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        var div2 = div.parentElement;
        div2.style.display = "none";
    }
}


    //Reset inputs

document.getElementById("noteInput").value = "";
document.getElementById("titleInput").value = "";
}