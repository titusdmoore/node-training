const http = require("http")

const server  = http.createServer((req, res) => {
  if ( req.url === '/' ) {
    res.end("Welcome to my home page")
  }
  if ( req.url === '/about' ) { 
    res.end("This is an about page")
  }

  res.end(`
    <h1>Oops</h1>
    <p>This page doess not exist</p>
    <a href="/">Go Home</a>
  `)
})

server.listen(5001)