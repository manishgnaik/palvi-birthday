const introScene = document.getElementById("introScene");
const storyScene = document.getElementById("storyScene");
const finalScene = document.getElementById("finalScene");

const heart = document.getElementById("heart");
const tapText = document.getElementById("tapText");
const birthdayTitle = document.getElementById("birthdayTitle");

const cards = document.querySelectorAll(".storyCard");
const continueHint = document.getElementById("continueHint");

const typedLetter = document.getElementById("typedLetter");
const replayBtn = document.getElementById("replayBtn");

let petalsStarted = false;
let currentScene = 0;
let storyActive = false;

/* ==========================
   PETALS
========================== */

function createPetal() {

    const petal = document.createElement("img");

    petal.src = "assets/petal.png";

    petal.classList.add("petal");

    const size = Math.random() * 18 + 10;

    petal.style.width = size + "px";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        Math.random() * 6 + 8 + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 15000);
}

function startPetals() {

    if (petalsStarted) return;

    petalsStarted = true;

    setInterval(() => {
        createPetal();
    }, 200);
}

/* ==========================
   START STORY
========================== */

function startExperience() {

    document.body.removeEventListener(
        "click",
        startExperience
    );

    gsap.to("#heart", {
        scale: 12,
        opacity: 0,
        duration: 1
    });

    gsap.to("#tapText", {
        opacity: 0,
        duration: 0.3
    });

    gsap.to("#birthdayTitle", {
        opacity: 1,
        y: -30,
        duration: 1.5,
        delay: 0.5
    });

    startPetals();

    setTimeout(() => {

        gsap.to("#birthdayTitle", {
            opacity: 0,
            duration: 1
        });

        setTimeout(() => {

            introScene.style.display = "none";

            storyScene.style.display = "flex";

            showScene(0);

            storyActive = true;

        }, 1000);

    }, 3000);
}

/* ==========================
   STORY SCENES
========================== */

function showScene(index) {

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform =
            "translateY(40px)";

        card.classList.remove("active");
    });

    cards[index].classList.add("active");

    gsap.to(cards[index], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    const colors = [

        "radial-gradient(circle at center,#ff5ca8 0%,#5a003d 45%,#120010 100%)",

        "radial-gradient(circle at center,#ff82c4 0%,#6a1b52 45%,#140012 100%)",

        "radial-gradient(circle at center,#ff9ad6 0%,#7b245e 45%,#190015 100%)"
    ];

    document.body.style.background =
        colors[index];
}

function nextScene() {

    if (!storyActive) return;

    currentScene++;

    if (currentScene < cards.length) {

        showScene(currentScene);

    } else {

        openLetter();
    }
}

/* ==========================
   FINAL LETTER
========================== */

const finalText = `No matter how much time passes,

some people remain special in ways
that are difficult to explain.

Today isn't about the past.
It's about celebrating you,
the person you are,
and all the wonderful things waiting ahead.

I hope your day is filled with laughter,
your year with success,
and your life with happiness.

Happy Birthday, Palvi. ❤️

— Manish`;

function typeLetter(text, element) {

    let i = 0;

    element.innerHTML = "";

    const typing = setInterval(() => {

        element.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(typing);
        }

    }, 35);
}

function openLetter() {

    storyActive = false;

    storyScene.style.display = "none";

    finalScene.style.display = "flex";

    document.body.style.background =
        "radial-gradient(circle at center,#ff9fd9 0%,#8a2e69 45%,#1a0016 100%)";

    typeLetter(
        finalText,
        typedLetter
    );
}

/* ==========================
   REPLAY
========================== */

replayBtn.addEventListener(
    "click",
    () => {

        location.reload();
    }
);

/* ==========================
   EVENTS
========================== */

document.body.addEventListener(
    "click",
    startExperience,
    { once: true }
);

continueHint.addEventListener(
    "click",
    nextScene
);

storyScene.addEventListener(
    "click",
    nextScene
);
