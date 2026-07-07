// Variables and Data Types
 let message = "Hello, JavaScript!";
 console.log(message);

 // Function Declaration
 function greetUser() {
   alert("Welcome to JavaScript Fundamentals and Responsive Design!");
 }


 // Run after the page has loaded
 //document.addEventListener("DOMContentLoaded", function () {
 //  greetUser();

   // DOM Manipulation
   let button = document.getElementById("changeText");
   let text = document.getElementById("text");

 //  button.addEventListener("click", function () {
 //	text.textContent =
  // 	"You clicked the button! JavaScript is working inside a responsive layout.";
 //	text.style.color = "blue";

     console.log("Button clicked successfully.");


 // Run after the page has loaded
 document.addEventListener("DOMContentLoaded", function () {
   greetUser();
   // DOM Manipulation
   let button = document.getElementById("changeText");
   let text = document.getElementById("text");
   button.addEventListener("click", function () {
     text.textContent =
     "You clicked the button! JavaScript is working inside a responsive layout.";
     text.style.color = "blue";
     console.log("Button clicked successfully.");
   });
   /*W EEK 6 PROCESSING USER INPUT:                                    *
    This code listens for the form submit event.
    event.preventDefault() stops the page from refreshing.
    JavaScript reads the user's name and email from the form fields.
    If the fields are empty, an alert asks the user to complete the
    form.
      If the fields are valid, the information is saved in
      localStorage.
      Then the page shows:
      - registration complete
      - information saved
      - authentication complete
      NOTE:
      This is a frontend-only simulation for the Week 6 lab.
      Real authentication normally needs a backend server and database.*/

    document.getElementById("userForm").addEventListener("submit",
function (event) {
 event.preventDefault();
 let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let authStatus = document.getElementById("authStatus");
 if (name.trim() === "" || email.trim() === "") {
 alert("Please fill in all fields");
 return;
 }
 let userData = {
 name: name,
 email: email,
 registered: true,
 authenticated: true
 };
 localStorage.setItem("registeredUser", JSON.stringify(userData));
 authStatus.textContent =
 `Registration complete. Welcome, ${name}. Your information is
saved and authentication is complete.`;
 authStatus.classList.add("complete");
 alert(`Thank you, ${name}! Your information has been saved and
authentication is complete.`);
 console.log("Saved user data:", userData);
 });
});

 document.getElementById("userForm").addEventListener("submit",
  function (event) {
    event.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let authStatus = document.getElementById("authStatus");
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    let userData = {
      name: name,
      email: email,
      registered: true,
      authenticated: true
                                                        };
      localStorage.setItem("registeredUser", JSON.stringify(userData));
      authStatus.textContent =  `Registration complete. Welcome, ${name}. Your information is saved and authentication is complete.`;
      authStatus.classList.add("complete");
      alert(`Thank you, ${name}! Your information has been saved and authentication is complete.`);
      console.log("Saved user data:",userData);
      });
