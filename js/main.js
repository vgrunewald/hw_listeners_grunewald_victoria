//#1: Event listener listens for a click on the page background. Upon click, listener changes background color styling to new color.
var background = document.body;
background.addEventListener("click", function(){
    background.style.backgroundColor = "#33f200";
});
//Event listener listens for a click on the container over top the background and prevents background color change from bubbling up DOM to body.
document.getElementById("container").addEventListener("click", function(event){
    event.stopPropagation();
});

//#2: Event listener listens for double click on top page heading. Upon double click, listener changes top heading to new text.
var heading = document.getElementById("page-title");
heading.addEventListener("dblclick", function(){
    this.innerHTML="Go Seahawks!";
});

//#3: Event listener listens for mouseover on image. Upon mouseover, listener replaces current image with new image.
var image = document.getElementById("seattle");
image.addEventListener("mouseover", function(){
    this.src="img/seahawks.jpg";
});
//Event listener listens for mouse outside of image after rollover to revert image back to its original form.
image.addEventListener("mouseout", function(){
    this.src="img/seattle.jpg";
});
