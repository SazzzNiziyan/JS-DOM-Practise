var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type = "text"]');
// var inp2 = document.querySelector("#input2");
var h4 = document.querySelector("h4");

form.addEventListener ("submit", function (ev){
    ev.preventDefault();
    // if(inp1.value ===''|| inp2.value === ''){
    //     h4.textContent = "error , some feilds  are blanks";
    //     h4.style.color = "red"
    // }
    // else{
    //     h4.textContent ="";
    //     h4.style.color = "black"; 
    // }


    // inps.forEach(function(inp){
    //     if(inp.value === ''){
    //         document.querySelector("h4").textContent = 'error';
    //         h4.style.color = 'red';
    //     }
    //     else{
    //         h4.textContent ="";
    //         h4.style.color = "black";
    //     }
    // })

    for(var i = 0; i<inps.length; i++){
        if(inps[i].value.trim() === ''){
         document.querySelector("h4").textContent = 'error';
         h4.style.color = 'red';
         break;
        }
    }
})