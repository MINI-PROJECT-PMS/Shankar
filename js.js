'use strict'
document.querySelector('.dept').addEventListener('mouseenter',function(){
    document.querySelector('.three').classList.remove('hidden');
})
document.querySelector('.dept').addEventListener('mouseleave',function()
{
    document.querySelector('.three').classList.add('hidden');    
})