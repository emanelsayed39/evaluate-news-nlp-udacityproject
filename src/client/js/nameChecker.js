function checkForName(inputText) {
   let expression = 
   /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
           let newregex = new RegExp(expression);
           var url = inputText;
           el_up.innerHTML = "URL = '" + url + "'";
     
           
               if (url.match(renewregexgex)) {
               return true;
               } else {
               return false;
               }
             
   
           
         }


export {checkForName}
