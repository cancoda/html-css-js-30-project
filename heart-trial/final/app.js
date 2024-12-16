const bodyEl = document.querySelector("body");

bodyEl.addEventListener('mousemove', (even) => {

    const xPos = even.offsetX;
    const yPos = even.offsetY;
    const rand = Math.random() * 100;

    var spanEl = document.createElement("span");
    
    spanEl.style.width = rand + "px"; 
    spanEl.style.height = rand + "px"; 

    spanEl.style.top = yPos + "px"; 
    spanEl.style.left = xPos + "px";
    
    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);

});