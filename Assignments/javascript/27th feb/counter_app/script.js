let btn_value=document.getElementById("val")
let btn_increment=document.getElementById("inc")
let btn_decrement=document.getElementById("dec")
let btn_reset=document.getElementById("reset")
btn_value.textContent="0"


btn_decrement.addEventListener("click",()=>{
    const value= Number(btn_value.innerText);
    if (value>0)
    btn_value.innerText=value-1;
    else
    alert("Negative value not allowed");
});

btn_increment.addEventListener("click",()=>{
    const value= Number(btn_value.innerText);
    if (value>=10)
    alert("10+ value not allowed");
    else
    btn_value.innerText=value+1;
});


btn_reset.addEventListener("click",()=>{
   btn_value.innerText=0;
});


const random_color=()=>{
    let numAlpha="0123456789ABCDEF";
    let symbol="#";
    for(let i=0;i<6;i++){
        symbol=symbol+ numAlpha[Math.floor(Math.random()*16)];
    }
    return symbol;
};
function change_color(){
    document.getElementById("val").style.backgroundColor=random_color();
}
btn_reset.addEventListener("click",change_color)
btn_increment.addEventListener("click",change_color)
btn_decrement.addEventListener("click",change_color)