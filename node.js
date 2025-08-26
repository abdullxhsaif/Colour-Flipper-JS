function changeColour() {
    let colour = "#" + Math.floor(Math.random()* 16777215);
    document.body.style.backgroundColor = colour;
    document.getElementById("colourcode").textContent = colour;
}
document.getElementById("flipBtn").addEventListener("click",changeColour);