const cron=require('node-cron');
const TicketNotification=require('../model/notification')
const transporter=require('../notifier/emailService')

cron.schedule('*/5 * * * * *',async ()=>{
    
    const notifications=await TicketNotification.find({
        sentStatus:"UN_SENT"
    });
    console.log(notifications.length)

    notifications.forEach(notification=>{
        
        const mailData={
            from:'crm-notification-service@gmail.com',
            to:notification.receipientEmails,
            subject:notification.subject,
            text:notification.content
        }
        console.log(mailData);
        transporter.sendMail(mailData,async function(err,info){
            if(err){
                console.log(err)
            }
            else{
                console.log(info)
            }
 const savedNotification=await TicketNotification.findOne({_id:notification._id})
          savedNotification.sentStatus="SENT";

          await savedNotification.save();

        })


    })
  

})