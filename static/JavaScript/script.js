
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// Scroll up

document.querySelector('#button-up').addEventListener('click', () =>(
window.scrollTo({
    top:0,
    behavior: "smooth"
})
));


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 300){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 300){
        buttonUp.style.transform = "scale(0)";
    }

}


const registerButton = document.getElementById("register")
const loginButton = document.getElementById("login")
const containers = document.getElementById("containers")

registerButton.addEventListener("click", () => {
  containers.classList.add("right-panel-active")
});

loginButton.addEventListener("click", () => {
  containers.classList.remove("right-panel-active")
})


