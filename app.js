const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const app = express();
const port = 3000;

// Use multer middleware to handle multipart/form-data
const upload = multer();
app.use(upload.none());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Endpoint to handle form submission
app.post("/submit-form", (req, res) => {
  // Log the entire req.body to the console
  console.log("Form Data:", req.body);

  // Load existing data from the JSON file, or create an empty array if the file doesn't exist
  const fileName = "form-data.json";
  let formDataArray = [];
  try {
    const fileData = fs.readFileSync(fileName, "utf-8");
    formDataArray = JSON.parse(fileData);
  } catch (error) {
    // File doesn't exist or is not a valid JSON, ignore and create a new array
  }

  // Append the new form data to the array
  formDataArray.push(req.body);

  // Limit the array to the last 100 data sets
  formDataArray = formDataArray.slice(-100);

  // Save the updated array to the JSON file
  fs.writeFile(fileName, JSON.stringify(formDataArray, null, 2), (err) => {
    if (err) {
      console.error("Error saving form data:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    } else {
      console.log(`Form data saved to ${fileName}`);
      res.json({ success: true, message: "Form submitted successfully" });
    }
  });
});

// Error event listener
app.on("error", (err) => {
  console.error("Unhandled error occurred:", err);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
