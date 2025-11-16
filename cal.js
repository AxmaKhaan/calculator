// let valueofinpu = "";
// let buttons = document.querySelectorAll("button");
// // let btns = new Array[buttons];
// // btns.forEach(function funcName(e){
// //     btns.add
// // })
// Array.from(buttons).forEach((btn)=>{
//     btn.addEventListener("click", (btn1)=>{
//         console.log(btn1.target);
//         valueofinpu =valueofinpu + btn1.target.innerHtml;
//         document.querySelector("input").value = valueofinpu;

//     })
// })

// let button = document.querySelectorAll("button");
// let input = document.querySelector("input");
// for(let i=1 ; i<=16 ; i++) {
//     button[i].addEventListener("click", function name(btn){
//         if(button[i] = "click"){
//         let btn1 = btn.innerText;
//         input.innerText = btn;
//         }
//     })
// }






















let target_value = "";
function clickedd(event) {
    target_value = event.target.innerHTML;
    console.log(target_value);
    let input = document.getElementById("input_text");
    
     if(target_value === "x") {
        input.value += "*"
        return;
     }
     if(target_value === "C") {
        input.value = "";
        return;
     }
     if(target_value === "=") {
        input.value = eval(input.value)
        return;
     }
     input.value += target_value;
}