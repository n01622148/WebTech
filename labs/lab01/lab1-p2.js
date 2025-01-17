const http = require("http")
const fs = require("fs")
const path = require("path")

const app = http.createServer((req, res)=>{
    
    if (req.url === "/"){
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    }else if (req.url === "/homepage"){
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    } else if (req.url === "/about"){
        res.end("Hello from about page")
    } else if (req.url === "/contact"){
        res.end("Hello from contact page")
    } else if (req.url === "/login"){
        res.end("Hello from login form")
    }else if (req.url === "/fetch_data"){
        res.end("Hello from fetch_data")
    }else {
        res.end("ERROR 404 - page not found")
    }
})
let PORT = 8000
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})