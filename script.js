"use strict";


const li = document.querySelector("#item1"),
  list1 = document.querySelector("#div1"),
  list2 = document.querySelector('#div2'),
  li2=document.querySelector('#item2'),
  list3=document.querySelector('#div3'),
  list4=document.querySelector('#div4'),
  li3=document.querySelector('#item3'),
  li4=document.querySelector('#item4'),
  menu2=document.querySelector('#menu2'),
  menu=document.querySelector('#menu'),
  wrap3=document.querySelector('.wrap3');
 







li.addEventListener("click", () => {
 if(div1.getAttribute('class')!=='list6'){
   div1.setAttribute('class',  "list6");
  
   
 }else{
   div1.setAttribute('class', "list_first")
 }
});


li2.addEventListener('click', ()=>{
   if(div2.getAttribute('class')!=='list7'){
      div2.setAttribute('class', 'list7');
   }else{
      div2.setAttribute('class', "list_second")
   }
});






li3.addEventListener("click", () => {
  if(div3.getAttribute('class')!=='list8'){
    div3.setAttribute('class',  "list8");
   
    
  }else{
    div3.setAttribute('class', "list_third")
  }
 });
 
 
 li4.addEventListener('click', ()=>{
    if(div4.getAttribute('class')!='list9'){
       div4.setAttribute('class', 'list9');
    }else{
       div4.setAttribute('class', "list_fourth")
    }
 });


 menu2.addEventListener('click', ()=>{
    if(wrap3.getAttribute('class') != 'wrap4'){
      wrap3.setAttribute('class', 'wrap4')
    }else{
      wrap3.setAttribute('class', "");
    }
 });


menu.addEventListener('click', ()=>{
  if(wrap3.getAttribute('class') != 'wrap4'){
    wrap3.setAttribute('class', 'wrap4')
  }else{
    wrap3.setAttribute('class', "wrap3");
  }
});