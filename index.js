const skillBtn = document.getElementById("skillBtn").addEventListener("click", ()=>{
    clear("skillTab");
    onClickShow("skillTab");
   // 
    
})
const expBtn = document.getElementById("expBtn").addEventListener("click", ()=>{
    onClickShow("expTab");
})
const eduBtn = document.getElementById("eduBtn").addEventListener("click", ()=>{
    clear("eduTab");
    onClickShow("eduTab");
    //

})


function clear(currentTab){
    const tabs = ["skillTab", "expTab", "eduTab"]
    tabs.forEach((tabId) => {
        const tab = document.getElementById(tabId);
        if(tabId !== currentTab){
            tab.style.display = 'none';
        }
    });
}

function onClickShow(tabName){
    const hiddenText = document.getElementById(tabName);

    if (hiddenText.style.display === "none"){
        hiddenText.style.display = "block";
    }else{
        hiddenText.style.display = "none";
    } 
}


