const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (even) => {

    const xPos = even.offsetX;
    const yPos = even.offsetY;
    const size = Math.random() * 100;

    const spanEl = document.createElement("span");
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    spanEl.style.top = yPos + "px";
    spanEl.style.left = xPos + "px";

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);

});