//#1: Event listener listens for a click on the page background. Upon click, listener changes background color styling to new color.
var background = document.body;
background.addEventListener("click", function(){
    this.style.backgroundColor = "#33f200";
});
