// get text container

const textContainer = document.getElementById('textContainer');

// text array
const textArray = [
    "web Developer",
    "Freelancer",
    "React Developer",
    "Javascript Developer"
];

// set defult value for array index
// and for wordrs index
let arrayIndex = 0;
let wordIndex = 0;

// call the update text function
updateText();

// the update text function
function updateText() {

    wordIndex++;

    textContainer.innerHTML = `${textArray[arrayIndex].slice(0, wordIndex)}`;

    if (wordIndex === textArray[arrayIndex].length) {
        arrayIndex++;
        wordIndex = 0;
    }
    
    if (arrayIndex === textArray.length) {
        arrayIndex = 0;
    }


    setTimeout(updateText, 400);

}