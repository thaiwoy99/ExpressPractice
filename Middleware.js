const express = require('express')
const app = express()

const FirstMiddleWare = (req,res,next)=>{
    console.log(`Request made to: ${req.url}`);

    next()
}

app.use(FirstMiddleWare)

app.get('/', (req,res)=>{
    res.send("Home")
} )

app.get('/about', (req,res)=>{
    res.send("about")
} )
app.listen(3000,()=>{
    console.log("the server is currently running")
})