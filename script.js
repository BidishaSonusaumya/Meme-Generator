const memeBtn = document.getElementById("generate-Meme");
const memeImg = document.getElementById("meme-img");
const memeTitle = document.getElementById("meme-title");
const memeAuthor = document.getElementById("meme-author");
const clickHere = document.getElementById("click-here");

const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeAuthor.innerHTML = author;
    memeTitle.innerHTML = title;
}

const GenerateMeme = () => {
    clickHere.style.display = "none";
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then(data =>{
        updateDetails(data.url, data.title, data.author)
    })
}

memeBtn.addEventListener("click", GenerateMeme);