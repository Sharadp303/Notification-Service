let serverPort=6000
if(process.env.NODE_ENV!=='development'){
    require('dotenv').config()
    serverPort=process.env.PORT
}
module.exports={serverPort:serverPort}