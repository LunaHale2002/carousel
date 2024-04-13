const ICONNEXT = "icon-next";
const ICONPREV = "icon-prev";
const nextImg = document.getElementById(ICONNEXT);
const prevImg = document.getElementById(ICONPREV);
const textElement = document.querySelector('.testimonial-text');
const authorElement = document.querySelector(".testimonial-author");
const positionElement = document.querySelector(".testimonial-position");
const imageElement = document.querySelector("#img")

const testimonials = [
    {
        imgUrl: "public/images/raiden ei.jpg",
        alt: "Raiden Ei - God of Eternity",
        message: "“Reign of Serenity.”",
        author: "Raiden Ei",
        position: "God of Eternity", 
    },
    {
        imgUrl: "public/images/zhongli.webp",
        alt: "Morax - Sovereign of the Rock and God of Contracts”",
        message: "“Gentry of Hermitage.”",
        author: "Morax",
        position: "Sovereign of the Rock and God of Contracts",
    },
    {
        imgUrl: "public/images/Drogon.webp",
        alt: "Drogon",
        message: "“Dracarys”",
        author: "Drogon",
        position: "Son of the mother of dragons", 
    },
    {
        imgUrl: "https://i.pinimg.com/236x/07/36/12/0736126406a32cc4779274b2b2fd7f54.jpg",
        alt: "Captive",
        message: "“Avant il voulait te voir morte. - Maintenant il pourrait mourrir pour toi.”",
        author: "Sarah Rivens",
        position: "Captive",
    },
    {
        imgUrl: "https://cdn-uploads.gameblog.fr/img/news/395239_61c1e7bad9f38.jpg",
        alt: "The Witcher",
        message: "“The Witcher”",
        author: "Geralt of Riviera and Cirilla of Cintra",
        position: "Sorceller and Princess", 
    },
];
let index = 0;

function changeContent(e = null){
    let action = "next";

    console.log(e);
    if((e instanceof KeyboardEvent && e.key === "ArrowLeft") 
    || (e instanceof PointerEvent && e.target.id === ICONPREV)){
        action = "prev"
        console.log(action)
    }
    if((e instanceof KeyboardEvent && e.key === "ArrowRight") 
    || (e instanceof PointerEvent && e.target.id === ICONNEXT)){
        action = "next"
        console.log(action);
    }
    if(action === "next"){
        console.log(action);
        if(index === testimonials.length-1){
            index = 0;
        } else {
            index ++;
        }
    } else if (action === "prev") {
        console.log(action)
        if(index === 0){
            index = testimonials.length - 1;
        } else {
            index --;
        } 
    }

    const testimonial = testimonials[index];
    textElement.textContent = testimonial.message;
    authorElement.textContent = testimonial.author;
    positionElement.textContent = testimonial.position;
    imageElement.setAttribute("src", testimonial.imgUrl);
}

nextImg.addEventListener("click", changeContent)  
prevImg.addEventListener('click', changeContent)
window.addEventListener("keydown", changeContent)

const interval = setInterval(() => {
    changeContent();
}, 4000)