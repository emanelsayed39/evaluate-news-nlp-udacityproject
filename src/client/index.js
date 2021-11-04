import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import {handleSubmit} from './js/formHandler';
import {post} from  './js/formHandler';
import {checkForName}  from './js/nameChecker';
import "core-js/stable";
import "regenerator-runtime/runtime";

/*window.addEventListener("DOMContentLoaded",()=>{
    const button=document.getElementById('btnSubmit');
    button.addEventListener('click',(e)=>{
    handleSubmit(e);
    });
}) ;*/


export {handleSubmit,post,checkForName};
