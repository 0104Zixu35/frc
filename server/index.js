import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app=express();
// Define a route to handle GET requests
app.get("/", function(req, res) {
    res.send("Hesdadallo Wdsadordsadasld!");
});

const PORT=process.env.DB_PORT || 3000;
// Set up server listening
app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});

