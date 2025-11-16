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