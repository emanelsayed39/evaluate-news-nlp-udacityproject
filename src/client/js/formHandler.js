import {checkForName} from './nameChecker';

const serverURL='http://localhost:8001/submit';

 
const post=async (data)=>
{
   // console.log(data);
    //console.log(JSON.stringify(data));
    try{
    const result=await fetch(serverURL,{
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
        const resultdiv= document.getElementById('results')
        console.log(res)
        if (res.error==="0")
        {
            resultdiv.innerHTML="";
               var div = document.createElement("div");
               div.innerHTML +=`Text : ${res.text}`;
               div.innerHTML +=`<br/> agreement : ${res.agreement}`;
               div.innerHTML +=`<br/>subjectivity : ${res.subjectivity}`;
               div.innerHTML +=`<br/>confidence : ${res.confidence}`;
               div.innerHTML +=`<br/>irony : ${res.irony}`;
               div.innerHTML +=`<br/>score_tag : ${res.score_tag}`;
               document.getElementById('results').append(div);
               return true;
        }
        else
        {
            resultdiv.innerHTML=res.msg;
            return false;        }

    })
}
catch(error){
console.log(error)
return false;
}
};

    // check what text was put into the form field
 const handleSubmit=async(event)=>{
        event.preventDefault();
      
       const formText = document.getElementById('name').value
       // const formText='https://www.shrm.org/resourcesandtools/hr-topics/benefits/pages/best-benefits-practices-for-the-gig-economy.aspx';
        if (checkForName(formText)){
           // console.log("::: Form Submitted :::")
            const succ=  post({url:formText})
            if (succ===false)
            {

            alert("error while getting the data")

            }
           
        }
        else{
            alert("Please enter a valid URL")
        
        }
    };

export {handleSubmit,post}
