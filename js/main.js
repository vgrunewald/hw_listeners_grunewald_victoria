//#1: Event listener listens for a click on the page background. Upon click, listener changes background color styling to new color.
var background = document.body;
background.addEventListener("click", function(){
    this.style.backgroundColor = "#33f200";
});

//#2: Event listener listens for double click on top page heading. Upon double click, listener changes top heading to new text.
var heading = document.getElementById("page-title");
heading.addEventListener("dblclick", function() {
    this.innerHTML="Go Seahawks!";
});

