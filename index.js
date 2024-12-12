import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app =express()
const PORT= process.env.PORT || 9000



app.get("/" ,(req, res)=>{
  res.send({
    message:`Server is running on ${PORT}`
  })
})

app.listen(PORT ,()=>{
    console.log(`Server is Running on port : ${PORT}`)
})