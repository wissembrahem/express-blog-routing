import express from "express";


const app = express();
const port = 3010;

app.get("/", (req, res) => {
    console.log("Rotta /");
    res.send("test")
})

app.listen(port, () => {
    console.log(`${port}`)
})