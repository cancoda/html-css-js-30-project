let textTochangeContainer = document.getElementById('textToChange');

const texts = [
    "Web Developer",
    "Freelancer",
    "Full Stack",
    "React Dev.",
    "Javascript Dev."
];

let textsIndex = 0;
let textsIndexWords = 0;

updateText();

function updateText() {
    textsIndexWords++

    textTochangeContainer.innerHTML = `
    ${texts[textsIndex].slice(0, textsIndexWords)}    
`;

    if(textsIndexWords === texts[textsIndex].length){
        textsIndexWords = 0;
        textsIndex++;
    }

    if(textsIndex === texts.length){
        textsIndex = 0;
    }

    setTimeout(updateText, 300);

}