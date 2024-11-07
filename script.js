
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const displayMenu = document.querySelector("#resp");
console.log(menu);

menu.addEventListener("click",(e)=>{
        
        displayMenu.style.display="block";
        
    })
    
close.addEventListener("click",()=>{

    displayMenu.style.display="none";
    displayMenu.style.display="none";


})

//animations

const education = document.querySelectorAll("ul>li");

const educationArray = Array.from(education);

educationArray.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        console.log(e);
    })
})







