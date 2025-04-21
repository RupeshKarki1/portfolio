const skillBtn = document.getElementById("skillBtn")
const expBtn = document.getElementById("expBtn")
const eduBtn = document.getElementById("eduBtn")

let skillTab = document.getElementById("skillTab")
let expTab = document.getElementById("expTab")
let eduTab = document.getElementById("eduTab")

let tabContent = document.querySelectorAll(".tabContent")
let tabLinks = document.querySelectorAll(".tabLinks")

//adding click function to buttons
skillBtn.addEventListener("click", ()=>{
    clickShow(skillTab, skillBtn)
})
expBtn.addEventListener("click", ()=>{

   clickShow(expTab, expBtn);
})
eduBtn.addEventListener("click", ()=>{
    clickShow(eduTab, eduBtn);
})

//click function to add active state to tab class
function clickShow(tab, btn){
    //deactivate all the buttons first
    if (tab.classList.contains('active')){
        tab.classList.remove('active')
        btn.classList.remove('active')
    }else{
        tabContent.forEach((content) =>{
            content.classList.remove('active');
        })
        tabLinks.forEach((link) =>{
            link.classList.remove('active')
        })
        
        //activate afterwards to only activate the selected button 
        tab.classList.add('active')
        btn.classList.add('active')
    }
}
