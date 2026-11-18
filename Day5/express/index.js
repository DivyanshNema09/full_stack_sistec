import express from "express"
const app = express()

app.get("/get" , (req,res)=>{
    res.send("h1")
})

app.listen(5000 , ()=>{
    console.log("server started")
})