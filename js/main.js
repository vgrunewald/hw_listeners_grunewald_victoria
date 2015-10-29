var formSubmit = document.getElementById("myForm");
formSubmit.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("The firstName is: " + document.getElementById("first-name").value);
    console.log("The lastName is: " + document.getElementById("last-name").value);
    console.log("The email is: " + document.getElementById("email").value);
    console.log("The message is: " + document.getElementById("message").value);
});
