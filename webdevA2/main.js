const abtpagebtn = document.querySelector("#abtpagebtn");
const rulepagebtn = document.querySelector("#rulepagebtn");
const skillpagebtn = document.querySelector("#skillpagebtn");

const aboutSection = document.querySelector("#aboutSection");
const ruleSection = document.querySelector("#ruleSection");
const skillSection = document.querySelector("#skillSection");

// show page
function showSection(sectionToShow){
    aboutSection.style.display = "none";
    ruleSection.style.display = "none";
    skillSection.style.display= "none";

    aboutSection.classList.remove("show");
    ruleSection.classList.remove("show");
    skillSection.classList.remove("show");

    sectionToShow.style.display= "block";

    setTimeout(() => {
        sectionToShow.classList.add("show");
    }, 10);
}

// Show correct page
abtpagebtn.addEventListener("click", function(){
    showSection(aboutSection);
});
rulepagebtn.addEventListener("click", function(){
    showSection(ruleSection);
});
skillpagebtn.addEventListener("click", function(){
    showSection(skillSection);
});

// Animation
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

var elements = document.querySelectorAll('.hidden');
for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
}


// minigame
const dribblesound = new Audio("dribble_sound.mp3");

const ballId = document.getElementById("ballId")

const scoreBox=document.getElementById("scoreBox");
var score=0;

function balldribbled() {
    score++;
    scoreBox.innerHTML = "Score: " + score;
    dribblesound.play();

    ballId.classList.add("spin");
    setTimeout(function(){
        ballId.classList.remove("spin");
    }, 500);
}
ballId.addEventListener("click",balldribbled);