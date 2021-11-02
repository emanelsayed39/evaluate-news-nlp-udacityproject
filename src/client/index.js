import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import handleSubmit from './js/formHandler';

window.addEventListener("DOMContentLoaded",()=>{
    const button=document.getElementById('btnSubmit');
    button.addEventListener('click',(e)=>{
    handleSubmit(e);
    });
}) ;

export {handleSubmit};
