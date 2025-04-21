const skillBtn = document.getElementById("skillBtn")
const expBtn = document.getElementById("expBtn")
const eduBtn = document.getElementById("eduBtn")

let skillTab = document.getElementById("skillTab")
let expTab = document.getElementById("expTab")
let eduTab = document.getElementById("eduTab")

let tabContent = document.querySelectorAll(".tabContent")

//adding click function to buttons
skillBtn.addEventListener("click", ()=>{
    clickShow(skillTab)
})
expBtn.addEventListener("click", ()=>{

   clickShow(expTab);
})
eduBtn.addEventListener("click", ()=>{
    clickShow(eduTab);
})

//click function to add active state to tab class
function clickShow(tab){
    //deactivate all the buttons first
    if (tab.classList.contains('active')){
        tab.classList.remove('active')
    }else{
        tabContent.forEach((content) =>{
            content.classList.remove('active');
        })
        
        //activate afterwards to only activate the selected button 
        tab.classList.add('active');
    }
   

}
