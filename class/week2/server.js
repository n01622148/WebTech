const http = require("http")
const app = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Hello from home page")
    } else {
        res.end("Page not found")
    }
})
app.listen(8000)