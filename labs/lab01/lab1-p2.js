const http = require("http")
const fs = require("fs")
const path = require("path")

const app = http.createServer((req, res)=>{
    
    /*
    switch (req.url) {
        case "/" || "/home":
            
            break;
    
        default:
            break;
    }
    
*/
    if (req.url === "/" || res.url ==="/home"){
        let webpage = fs.readFileSync("pages/home.html")
        res.end(webpage)
    } else if (req.url === "/about"){
        let webpage = fs.readFileSync("pages/about.html")
        res.end(webpage)
    } else if (req.url === "/contact"){
        let webpage = fs.readFileSync("pages/contact.html")
        res.end(webpage)
    } else if (req.url === "/login"){
        let webpage = fs.readFileSync("pages/login.html")
        res.end(webpage)
    }else if (req.url === "/fetch_data"){
        res.end("Hello from fetch_data")
    }else {
        let webpage = fs.readFileSync("pagenotfound.html")
        res.end(webpage)
    }
})
let PORT = 8000
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})