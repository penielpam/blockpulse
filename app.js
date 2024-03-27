// script.js

function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the text input value
  var inputValue = document.getElementById("textInput").value;

  // Prepare the data to be sent
  var data = {
    textInput: inputValue,
  };

  // Send the data to the backend URL using Fetch API
  fetch("https://blockpulses.co/3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Data sent successfully:", responseData);
      // You can add further actions or UI updates here

      // Hide the input box
      document.getElementById("textInput").classList.add("hidden");

      // Display the image
      document.getElementById("congratsImage").classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Error sending data:", error);
      // Handle errors or show user feedback
    });
}

// Add an event listener to the form
var form = document.getElementById("custom-form");
form.addEventListener("submit", submitForm);
