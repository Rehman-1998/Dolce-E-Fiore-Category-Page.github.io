$(document).ready(function() {
 
$('.filter').click(function(){
    const value= $(this).attr('data-filter');
    var a=1;
    if (value == 'all')
    {
        $('.product-box').show('1000');
   
    }

    else {
        $('.product-box').not('.'+value).hide('1000');
        $('.product-box').filter('.'+value).show('1000');
    }
    shop.classList.remove("new");
     cross.classList.remove("new");

    

    
})

// for grid and  list

 const grid=document.querySelector(".grid");
 const list=document.querySelector(".list");
 const ltg=document.querySelector(".ltg");

 grid.addEventListener("click",()=>{
     ltg.classList.remove("list");


 })
  list.addEventListener("click",()=>{
     ltg.classList.add("list");
 })

//  For Filter class
 const shop =document.querySelector(".shop-by");
 const cross =document.querySelector(".cross");
 const filtericon =document.querySelector(".filter-icon");



 filtericon.addEventListener("click",()=>{
     shop.classList.add("new");
     cross.classList.add("new");
 })

 cross.addEventListener("click",()=>{
     shop.classList.remove("new");
     cross.classList.remove("new");
 })
 


//  Filter class end here
   




});






