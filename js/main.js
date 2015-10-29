var clicker = document.getElementById("click_me");
var i = 0;

clicker.addEventListener("click", function counter() {
    i++;
    var myElement = document.createElement("P");
    myElement.innerHTML = "This is click number " + i;
    document.body.appendChild(myElement);
});
