document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("toggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

};


// typing effect

const text = "Web Developer";
const typing = document.querySelector(".typing");

let i = 0;

function type(){

if(i < text.length){

typing.innerHTML += text.charAt(i);
i++;

setTimeout(type,100);

}

}

type();

});
