const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
 
 
// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
 
// routes
app.get("/", (req, res)=>{
    res.send("Welcome to our server")
})
 
app.get("/route_test", (req, res)=>{
    if (req.query.test_validation) {
        console.log(req.query.test_validation)
        const currentDate = new Date();
        const formattedDate = currentDate.toUTCString();
        console.log(`[${formattedDate}] ${req.originalUrl}`);
    }
    res.send("Welcome to our server")
    res.end();
})
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});