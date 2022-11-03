const express = require("express");
const router = express.Router();
const AWS =  require("aws-sdk");

const SES_CONFIG = {
  accessKeyId:,
  secretAccessKey: ,
  region:
}

const ses = new AWS.SES(SES_CONFIG);

router.post('/email', (req, res)=>{
  const {email, message, name} = req.body;
  sesTest("hello@surepay.com", email, message, name).then((val)=>{
    console.log("Got this back" + val);
    res.send("Successful")
  }).catch((err)=>{
    console.log("There was an error!")
    res.status(400).json({message: err.message})
  })

});

function sesTest(emailTo, emailFrom, message, name){
  const params ={
    Destination:{
      ToAddresses: [emailTo] // this vendor's email which is going to be from the database 
    },
    Message: {
      Body:{
        Text:{
          Data: "From Contact: " + name + "\n" + message
        }
      },
      Subject:{
        Data: "Name: " + emailFrom 
      }
    },
    Source: "hello@surepay.com" //the applications verified email
  };
  return ses.sendEmail(params).promise();
};

module.exports = router;