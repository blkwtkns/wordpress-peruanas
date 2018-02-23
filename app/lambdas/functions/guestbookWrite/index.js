console.log('h starting function');
const api_key = process.env.apiKey;
const domain = process.env.domain;
const mailgun = require('mailgun-js')({apiKey: api_key, domain:domain});
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(e, ctx, cb) {

  const validMsg = {
    from:`Message from Raicesperuanas.com <${e.email}>`,
    to: 'blakemwatkins@gmail.com',
    subject: `${e.name} left you a message; Lambda Database write valid`,
    text: `Testing some Mailgun awesomness from Lambda! DB write valid! ${e.name} sent you this message: ${e.message}`
  };

  const invalidMsg = {
    from: `Message from Raicesperuanas.com <${e.email}>`,
    to: 'blakemwatkins@gmail.com',
    subject: `${e.name} left you a message; Lambda Database write invalid: `,
    text: `Testing some Mailgun awesomness from Lambda! DB write invalid :( ${e.name} tried to send you this message: ${e.message}`  
  };

  const params = {
    Item: {
      date: Date.now(),
      name: e.name,
      email: e.email,
      message: e.message
    },
    TableName: 'raicesGuestbook'
  }

  const mailFunction = (data) => {
    mailgun.messages().send(data, function(error, body){
      // console.log(body)
      cb(error, body);
    })
  }

  docClient.put(params, function(err, data){
    if(err){
      mailFunction(invalidMsg);
    }else{
      mailFunction(validMsg);
    }
  })

}
