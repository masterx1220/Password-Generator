const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// For slider
let rangeInput = document.querySelector(".range-input input")
let rangeValue = document.querySelector(".range-input .value div")

let start = parseFloat(rangeInput.min);
let end = parseFloat(rangeInput.max);
let step = parseFloat(rangeInput.step);

for (let i = start; i <= end; i += step){
    rangeValue.innerHTML += "<div>" +i+ "</div>"
}

rangeInput.addEventListener("input", function(){
    let top = parseFloat(rangeInput.value)/step * -40;
    rangeValue.style.marginTop = top+"px"
});
//slider end

//Variable assignments
let passwordOneEl = document.getElementById("passwordOne");
let passwordTwoEl = document.getElementById("passwordTwo");
let passwordBtn = document.getElementById("passwordBtn");
let slideValueEl = document.getElementById("slideValue")


//makePassword function, displays password in the two h3 areas
passwordBtn.addEventListener("click", function(){
    passwordOneEl.textContent = makePassword()
    passwordTwoEl.textContent = makePassword()
})

//generate random characters
function randomCharacters(){
    let random = Math.floor(Math.random()*characters.length);
    return characters[random]
}

//generates random password
function makePassword(){
    let randomPassword = ""
    for(i = 0; i < slideValueEl.value; i++){
        randomPassword += randomCharacters()
    }
    return randomPassword
}

