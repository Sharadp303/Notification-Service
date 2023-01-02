const TicketNotification=require('../model/notification')

async function acceptNotificationRequest(req,res){
const notificationObj={
    subject:req.body.subject,
    content:req.body.content,
    receipientEmails:req.body.receipientEmails,
    requester:req.body.requester,
    ticketId:req.body.ticketId
}
try{
const notification=await TicketNotification.create(notificationObj)
res.status(200).send({requestId:notification.ticketId,
status:"Accepted Requested"})
}
catch(err){
    console.log(err)
    res.status(400).send({msg:"Internal server error"})
}
}

async function getNotificationStatus(req,res){
   const id=req.params.id;
    try{
      const notification= await TicketNotification.findOne({ticketId:id})
      res.status(200).send({
        requestId: notification.ticketId,
        subject: notification.subject,
        content: notification.content,
        receipientEmails: notification.receipientEmails,
        sentStatus: notification.sentStatus
    })
    }
    catch(err){
        console.log(err)
        res.status(400).send({msg:"Internal server error"})
    }
}
module.exports={acceptNotificationRequest,getNotificationStatus}