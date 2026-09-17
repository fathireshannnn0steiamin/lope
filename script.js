const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");

const calculate = document.getElementById("calculate");
const again = document.getElementById("again");

const result = document.getElementById("result");

const couple = document.getElementById("couple");
const score = document.getElementById("score");

const progress = document.getElementById("progress");

const messageIcon = document.getElementById("messageIcon");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");

const connection = document.getElementById("connection");
const energy = document.getElementById("energy");
const vibe = document.getElementById("vibe");

const hearts = document.getElementById("hearts");


/* CREATE FLOATING HEART */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent =
        Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        12 + Math.random() * 20 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";

    hearts.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 900);


/* CALCULATE LOVE */

function getLoveScore(first, second) {

    const text =
        first.toLowerCase().replace(/\s/g, "") +
        second.toLowerCase().replace(/\s/g, "");

    let total = 0;

    for (let i = 0; i < text.length; i++) {
        total += text.charCodeAt(i) * (i + 1);
    }

    return 35 + (total % 66);
}


/* GET MESSAGE */

function getMessage(value) {

    if (value >= 90) {

        return {
            title: "A truly magical connection",
            text: "These names create an extraordinary spark. There is something beautifully special about this combination.",
            connection: "Exceptional",
            energy: "Magnetic",
            vibe: "Magical",
            icon: "♥"
        };

    } else if (value >= 80) {

        return {
            title: "Something beautifully special",
            text: "There is a strong sense of chemistry here. This connection has plenty of warmth and positive energy.",
            connection: "Very Strong",
            energy: "Magnetic",
            vibe: "Romantic",
            icon: "♥"
        };

    } else if (value >= 70) {

        return {
            title: "A lovely connection",
            text: "The numbers suggest a warm and exciting connection between these two names.",
            connection: "Strong",
            energy: "Warm",
            vibe: "Lovely",
            icon: "♥"
        };

    } else if (value >= 55) {

        return {
            title: "There is definitely a spark",
            text: "Something interesting is happening here. This connection has a sweet and exciting energy.",
            connection: "Growing",
            energy: "Bright",
            vibe: "Sweet",
            icon: "♡"
        };

    } else {

        return {
            title: "A mysterious connection",
            text: "The numbers are keeping their secrets. Maybe some connections cannot be measured by a calculator.",
            connection: "Mysterious",
            energy: "Intriguing",
            vibe: "Unique",
            icon: "✦"
        };

    }
}


/* ANIMATE NUMBER */

function animateNumber(target) {

    let current = 0;

    const timer = setInterval(function() {

        current++;

        score.textContent = current;

        if (current >= target) {
            clearInterval(timer);
        }

    }, 20);
}


/* CALCULATE */

calculate.addEventListener("click", function() {

    const first = name1.value.trim();
    const second = name2.value.trim();

    if (first === "" || second === "") {

        alert("Please enter both names ❤️");

        return;
    }


    const value =
        getLoveScore(first, second);

    const data =
        getMessage(value);


    couple.textContent =
        first + " ♥ " + second;


    messageIcon.textContent =
        data.icon;

    messageTitle.textContent =
        data.title;

    messageText.textContent =
        data.text;

    connection.textContent =
        data.connection;

    energy.textContent =
        data.energy;

    vibe.textContent =
        data.vibe;


    result.classList.add("show");


    score.textContent = "0";

    progress.style.strokeDashoffset = "578";


    setTimeout(function() {

        const circumference = 578;

        const offset =
            circumference -
            (value / 100) * circumference;

        progress.style.strokeDashoffset =
            offset;

        animateNumber(value);

    }, 100);


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    for (let i = 0; i < 15; i++) {

        setTimeout(function() {
            createHeart();
        }, i * 100);

    }

});


/* RESET */

again.addEventListener("click", function() {

    result.classList.remove("show");

    name1.value = "";
    name2.value = "";

    score.textContent = "0";

    progress.style.strokeDashoffset = "578";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(function() {
        name1.focus();
    }, 500);

});


/* ENTER TO CALCULATE */

name1.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        calculate.click();
    }

});

name2.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        calculate.click();
    }

});
