const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;
        showImage();

        lightbox.style.display = "flex";

    });

});

function showImage(){

    lightboxImg.src = images[currentIndex].src;

}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage();

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

function filterSelection(category){

    images.forEach((image)=>{

        if(category==="all"){

            image.style.display="block";

        }

        else if(image.classList.contains(category)){

            image.style.display="block";

        }

        else{

            image.style.display="none";

        }

    });

}

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            nextBtn.click();
        }

        if (e.key === "ArrowLeft") {
            prevBtn.click();
        }

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    }

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

});