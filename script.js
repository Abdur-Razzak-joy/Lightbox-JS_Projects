const gallery = document.querySelector("#gallery");
const overlay = document.querySelector(".galleryOverlay");
const imageBox = document.querySelector(".imgBox");
const img = document.querySelector(".imgBox img");
const close = document.querySelector(".imgBox span")

gallery.addEventListener(
    "click",
    (event) => {
        let currentImagePath = event.target.src;
        if(currentImagePath !== undefined){
            overlay.classList.add("galleryOverlayShow");
            imageBox.classList.add("imgBoxShow");
            img.src = currentImagePath;
            console.log(currentImagePath)
        }
    }
)

close.addEventListener(
    "click",
    () => {
        overlay.classList.remove("galleryOverlayShow");
        imageBox.classList.remove("imgBoxShow");
    }
)

overlay.addEventListener(
    "click",
    () => {
        overlay.classList.remove("galleryOverlayShow");
        imageBox.classList.remove("imgBoxShow");
    }
)