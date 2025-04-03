const skillBtn = document.getElementById("skillBtn").addEventListener("click", ()=>{
    onClickShow("skillTab")
    
})
const expBtn = document.getElementById("expBtn").addEventListener("click", ()=>{
    onClickShow("expTab");
})
const eduBtn = document.getElementById("eduBtn").addEventListener("click", ()=>{
    onClickShow("eduTab");
})



function onClickShow(tabName){
    const hiddenText = document.getElementById(tabName);

    if (hiddenText.style.display === "none"){
        hiddenText.style.display = "block";
    }else{
        hiddenText.style.display = "none";
    }
    
    
}


