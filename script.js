* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

    width: 100vw;
    height: 100vh;

    overflow: hidden;

    font-family: 'Poppins', sans-serif;

    background:
        radial-gradient(circle at center,
            #ff5ca8 0%,
            #5a003d 45%,
            #120010 100%);

    transition: background 1s ease;
}

/* PETALS */

#petalContainer {

    position: fixed;

    inset: 0;

    pointer-events: none;

    z-index: 1;
}

.petal {

    position: fixed;

    top: -100px;

    pointer-events: none;

    opacity: .9;

    animation: fall linear forwards;
}

@keyframes fall {

    0% {

        transform:
            translateY(-100px) rotate(0deg);

    }

    100% {

        transform:
            translateY(120vh) translateX(120px) rotate(360deg);

    }
}

/* INTRO */

#introScene {

    position: absolute;

    inset: 0;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    z-index: 10;
}

#heart {

    width: 150px;

    cursor: pointer;

    animation: heartbeat 1.3s infinite;

    filter:
        drop-shadow(0 0 15px #ff69b4) drop-shadow(0 0 40px #ff69b4);
}

@keyframes heartbeat {

    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.15);
    }

    50% {
        transform: scale(1);
    }

    75% {
        transform: scale(1.12);
    }

    100% {
        transform: scale(1);
    }
}

#tapText {

    margin-top: 20px;

    color: white;

    letter-spacing: 4px;

    font-size: 15px;

    opacity: .8;
}

#birthdayTitle {

    position: absolute;

    text-align: center;

    opacity: 0;
}

#birthdayTitle h2 {

    color: white;

    font-weight: 300;

    font-size: 38px;
}

#birthdayTitle h1 {

    font-family: 'Great Vibes', cursive;

    color: #ffd4e8;

    font-size: 90px;

    text-shadow:
        0 0 10px #ff69b4,
        0 0 20px #ff69b4,
        0 0 40px #ff69b4;
}

/* STORY */

#storyScene {

    position: absolute;

    inset: 0;

    display: none;

    overflow: hidden;

    z-index: 20;
}

.storyCard {

    position: absolute;

    inset: 0;

    width: 100%;

    height: 100%;

    opacity: 0;

    overflow: hidden;
}

.storyCard.active {

    opacity: 1;
}

/* GIRL 1 & GIRL 3 */

.portrait {

    position: absolute;

    left: 50%;

    bottom: -160px;

    transform: translateX(-50%);

    height: 115vh;

    width: auto;

    max-width: 90vw;

    object-fit: contain;

    filter:
        drop-shadow(0 0 25px #ff69b4) drop-shadow(0 0 60px rgba(255, 105, 180, .5));
}

/* GIRL 2 */

.fullbody {

    position: absolute;

    left: 50%;

    bottom: 0;

    transform: translateX(-50%);

    height: 92vh;

    width: auto;

    max-width: 90vw;

    object-fit: contain;

    filter:
        drop-shadow(0 0 25px #ff69b4) drop-shadow(0 0 60px rgba(255, 105, 180, .5));
}

/* fallback */

.sceneImage {

    display: block;
}

/* QUOTES */

.quote {

    position: absolute;

    left: 50%;

    bottom: 110px;

    transform: translateX(-50%);

    width: 90%;

    text-align: center;

    color: white;

    font-size: 22px;

    line-height: 1.7;

    z-index: 50;

    text-shadow:
        0 0 15px rgba(0, 0, 0, .8);
}

#continueHint {

    display: none !important;
}

/* FINAL LETTER */

#finalScene {

    position: absolute;

    inset: 0;

    display: none;

    justify-content: center;

    align-items: center;

    flex-direction: column;

    padding: 30px;

    text-align: center;

    z-index: 30;
}

#letterBox {

    max-width: 700px;
}

#letterBox h2 {

    color: #ffd4e8;

    font-family: 'Great Vibes', cursive;

    font-size: 50px;

    margin-bottom: 20px;
}

#typedLetter {

    color: white;

    line-height: 1.9;

    font-size: 18px;
}

#replayBtn {

    margin-top: 40px;

    border: none;

    padding: 15px 25px;

    border-radius: 50px;

    cursor: pointer;

    font-size: 16px;

    background: #ff69b4;

    color: white;

    box-shadow:
        0 0 20px rgba(255, 105, 180, .5);
}

#replayBtn:hover {

    transform: scale(1.05);
}

/* MOBILE */

@media(max-width:768px) {

    #heart {
        width: 120px;
    }

    #birthdayTitle h1 {
        font-size: 70px;
    }

    .portrait {

        height: 120vh;

        bottom: -180px;

        max-width: 95vw;
    }

    .fullbody {

        height: 95vh;

        max-width: 95vw;
    }

    .quote {

        bottom: 90px;

        width: 92%;

        font-size: 17px;

        line-height: 1.6;
    }

    #typedLetter {

        font-size: 16px;
    }

    #letterBox h2 {

        font-size: 40px;
    }
}
