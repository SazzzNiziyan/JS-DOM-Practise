var home = document.querySelector('#home');
var about = document.querySelector('#about');
var contact = document.querySelector('#contact');


var text1 = document.querySelector('#text1');
var text2  = document.querySelector('#text2');
var text3  = document.querySelector('#text3');

text1.style.display = "block";
text1.style.width = "50%";


home.addEventListener("click", function(){
    saartexthatao();
    text1.style.display = "block";
    text1.style.width = "50%";
});

about.addEventListener("click", function(){
    saartexthatao();
    text2.style.display = "block";
    text2.style.width = "50%";
});

contact.addEventListener("click", function(){
    saartexthatao();
    text3.style.display = "block";
    text3.style.width = "50%";
}); 

function saartexthatao(){
    document.querySelectorAll("h3").forEach(function(   h3){
        h3.style.display = "none"
    })
};