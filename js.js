"use strict";
const nav=document.querySelector('.select');
const login=document.querySelector('.stud');
const falogin=document.querySelector('.faculty');
const login1=document.querySelector('.login');
const login2=document.querySelector('.falogin');
nav.addEventListener('click',function(e)
{
    console.log(e.target);
    
    if(e.target.classList.contains('stud'))
    {
        login2.classList.add('hidden');
     login1.classList.remove('hidden');
    }
    if(e.target.classList.contains('faculty'))
    {
        login1.classList.add('hidden');
     login2.classList.remove('hidden');
    }
})
const body =document.querySelector('.body');
body.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.classList.contains('hi')) {
       
    }
    else{
    login2.classList.add('hidden');
    login1.classList.add('hidden');
    }
})
