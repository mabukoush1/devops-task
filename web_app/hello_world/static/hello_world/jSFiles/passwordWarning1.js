/* eslint-disable no-unused-vars */

// Ajax api call request to server
// window.addEventListener("load", function () {
//     function sendData() {
//         const xhr = new XMLHttpRequest;

//         // Bind the FormData object and the form element
//         const FD = new FormData(form);

//         // define what happens on successfull data submission
//         xhr.addEventListener("load", function(e) {
//             alert(e.target.status);
//         });

//         // Or simply
//         // // define what happens on successfull data submission
//         // xhr.addEventListener("load", function() {
//         //     alert(xhr.status);
//         // });
        

//         // define what happens in case of an error
//         xhr.addEventListener("error", function(e) {
//             alert('Oops! something went wrong!')
//         });

//         // send up our request
//         xhr.open("POST", "http://0.0.0.0:8000/electronics_modifyPost1");

//         // the data sent is what the user provided in the form
//         xhr.send(FD);
//     }

//     // Access the form element and customise it.
//     var form = document.getElementById("edit-delete-form");

//     form.addEventListener("submit", function(e) {
//         event.preventDefault();
//         sendData();
//     });
// });


document.addEventListener("DOMContentLoaded", init, false); // Initialise the DOM Environment
	
function init() {
    window.addEventListener("load", warnUser, false);
}
// Function to remove warning after 6secs
function warnUser() {
    setTimeout(() => {document.getElementById('userWarning').setAttribute('hidden', '')}, 6000);
}

