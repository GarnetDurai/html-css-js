// TODO (Task 3): handle the form's submit event.
// 1. Prevent the page from reloading.
// 2. Read the value of #fullname.
// 3. Show a message in #result that includes the name, e.g.
//    "Thanks, Ada Lovelace! Your account was created."
    var form = document.getElementById("signup");
form.addEventListener("submit", function(event){
    var name = document.getElementById("fullname").value;
    var result = `Welcome, ${name} to our website!!!`;
    var inject = document.getElementById("result");
    inject.textContent = result;
    event.preventDefault();
});