// const express = require('express');
import express from 'express';

const app = express()

app.get("/", (req, res) => (
    res.send("Server is ready")
))

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
// 5djbR17uU3oDFoDp