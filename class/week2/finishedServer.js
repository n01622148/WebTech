const http = require("http")

const app = http.createServer((req, res)=>{
    
        if (req.url === "/homepage"){
            res.end("Hello from home page")
        } else if (req.url === "/about"){
            res.end("Hello from about page")
        } else if (req.url === "/contact"){
            res.end("Hello from contact page")
        } else if (req.url === "/login"){
            res.end("Hello from login form")
        }else if (req.url === "/fetch_data"){
            res.end("Hello from fetch_data")
        }else {
            res.end("ERROR 404")
        }
})
app.listen(8000)