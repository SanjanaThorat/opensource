npm init -y
npm install express cors
// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Define the /vnr_about endpoint
app.get('/vnr_about', (req, res) => {
  const philosophyText = "The Philosophy of Vignana Jyothi unravels education as a process of \"Presencing\" that provides, both individually and collectively, to one's deepest capacity to sense and experience the knowledge and activities to shape the future.";
  res.send(philosophyText);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
