const express=require('express')
const {getNotificationStatus,acceptNotificationRequest}=require('../controller/ticketNotification')
const routes=express.Router()

routes.get('/notification/get/:id',getNotificationStatus)
routes.post('/notification/create',acceptNotificationRequest)
module.exports=routes