var path = require('path');
const express = require('express');
const cors=require('cors');
//const Parser=require("body-parser")
const API = require('./meaningCloudAPI.js');

const app = express();

//console.log(mockAPIResponse);
//const dotenv=require('dotenv');
//dotenv.config();
//console.log(`Your API key is ${process.env.API_KEY}`)


///Configure cors
app.use(cors());


///configure express to user body-parser///
//app.use(Parser.urlencoded({ extended:false}));
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));


const Port=8001 ;


app.use(express.static('dist'))



app.get('/', function (req, res) {
    
    try
    {
        res.sendFile('../dist/index.html')
      // res.sendFile(path.resolve('src/client/views/index.html'))
    }
    catch(error)
    {
        console.log(error)
    }
});


app.post('/submit', async function (req, res) {
  let url=req.body.url;


    //return
   //  url='https://www.shrm.org/resourcesandtools/hr-topics/benefits/pages/best-benefits-practices-for-the-gig-economy.aspx';
 
   console.log(url)
   const result=await API(url);
 // console.log(JSON.stringify(result["status"].msg))
   if (result !== "error" && result["status"].msg==="OK")
   {
       
        console.log(JSON.stringify(result))
        const retValue={
            error:"0",
            text:result.sentence_list && result.sentence_list.length!=0?result.sentence_list[0].text:'',
            score_tag:result.score_tag,
            agreement:result.agreement,
            subjectivity:result.subjectivity,
            confidence:result.confidence,
            irony:result.irony
        }
       // console.log(retValue);
        res.status(200).send(JSON.stringify(retValue)); 
     }

    else{
        console.log("post error external");
        res.status(200).send({error:"1" ,msg: "SERVER ERROR"});
    }
   
   
 
})



// designates what port the app will listen to for incoming requests
app.listen(Port, function () {
    console.log('Example app listening on port '+ Port +'!')
})

app.get('/test', function (req, res) {
    res.send(API)
})
