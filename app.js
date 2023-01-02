const express =require('express')
const mongoose=require('mongoose')
const {dbconfig}=require('./config/dbconfig')
const routes=require('./routes/ticketNotification')
const cron=require('./cron/cron')

const app=express()
app.use(express.json())
app.use(routes)

mongoose.connect(dbconfig,()=>{
    console.log("connected to Server")
},(err)=>{console.log(err)})

app.listen(8050,()=>{
    console.log('server Running on localhost:8050')
})