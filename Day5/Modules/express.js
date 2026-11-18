import express from "express"
const app = express()

let data = [
    {   
        name : "divyansh",
        age : 15
    },{
        name : "vinod",
        age : 12
    }
]

app.get("/get" , (req,res)=>{
    res.send(data)
})

app.listen(5000 , ()=>{
    console.log("server started")
})