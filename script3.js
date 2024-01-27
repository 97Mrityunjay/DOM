const container = document.querySelector(".container");

const heading = document.querySelector(".count-header");

const button = document.querySelector(".count-button");



document.body.style.backgroundColor = "#758283";

heading.style.color = "#fff";

container.style.textAlign = "center";
button.style.width= "80px";


button.addEventListener("click", () => {
    let count = (Number)(button.innerText);
    button.innerText = (String)(count+1);
})