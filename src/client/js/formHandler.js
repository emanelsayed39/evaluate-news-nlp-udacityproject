import {checkForName} from './nameChecker';
const serverURL='http://localhost:8001/submit';

const post=async (url,data)=>
{
    console.log(data);
    //console.log(JSON.stringify(data));
    try{
    const result=await fetch(url,{
        method: "POST",
        credentials: "same-origin",
        mode:'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    .then(
        res=>res.json())
    .then(res=>{
       // console.log("fetch complete ");
        //console.log(res);//res => res.json()
        
        
               // document.getElementById('results').innerHTML 
               var div = document.createElement("div");
               div.innerHTML +=`Text : ${res.text}`;
               div.innerHTML +=`<br/> agreement : ${res.agreement}`;
               div.innerHTML +=`<br/>subjectivity : ${res.subjectivity}`;
               div.innerHTML +=`<br/>confidence : ${res.confidence}`;
               div.innerHTML +=`<br/>irony : ${res.irony}`;
               div.innerHTML +=`<br/>score_tag : ${res.score_tag}`;
               document.getElementById('results').append(div);

    })
}
catch(error){
alert("error while getting the data")
}
   };

    // check what text was put into the form field
    const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log("hello");
       const formText = document.getElementById('name').value
       // const formText='https://www.shrm.org/resourcesandtools/hr-topics/benefits/pages/best-benefits-practices-for-the-gig-economy.aspx';
        if (checkForName(formText)){
            console.log("::: Form Submitted :::")
            post('http://localhost:8001/submit',{url:formText})
        }
        else{
            alert("Please enter a valid URL")
        }
    };

export default handleSubmit
