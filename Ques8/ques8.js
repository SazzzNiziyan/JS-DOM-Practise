var input = document.querySelector("input");
var data = [
    {name: "alema" , src:"6ac808de19f77bb4886ecdc070b9bc4a.jpg"},
    {name: "alexa" , src:"alexander-krivitskiy-8gGUMSQQz0E-unsplash.jpg"},
    {name: "al" , src:"janis-dzenis-0ncwslQmOz4-unsplash.jpg"},
    {name: "clema" , src:"6ac808de19f77bb4886ecdc070b9bc4a.jpg"},
]

var pers = "";
data.forEach(function(elem) {
    pers += `   <div class="person">
                    <div class="img">
                        <img src="${elem.src}"alt="">
                    </div>  
                    <h4>${elem.name}</h4>
              </div> `;

})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input",function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })


var user = "";
matching.forEach(function (elem) {
    user += ` <div class="person">
                    <div class="img">
                        <img src="${elem.src}"alt="">
                    </div>  
                    <h4>${elem.name}</h4>
              </div> `;

})

document.querySelector(".people").innerHTML = user ;

})