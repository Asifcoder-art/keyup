const changeMyKey = document.getElementById("changeMyKey");

const input = document.getElementById("input");

document.addEventListener("keyup",(event)=>{
    changeMyKey.innerHTML = event.key;
})