const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 10000;
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Start server

app.listen(port,()=> {
    console.log(`app runnning on http://localhost:${port}`)
})