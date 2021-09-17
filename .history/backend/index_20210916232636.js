import express from express;
const app = express()
const PORT = 3000;

app.get("/", (req, res, next) => {
    res.send("Our Soccer application is running at" + PORT);
})

app.listen(PORT, () => {
    console.log("App running at PORT " + PORT)
})