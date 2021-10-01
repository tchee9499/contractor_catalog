const openButton = document.querySelector("#openModal")
const modal = document.querySelector("#modal")
const close = document.querySelector("#close")

const openModal = () => {
    modal.style.display = "block"
}
const closeModal = () => {
    modal.style.display = "none"
}
openButton.addEventListener("click", openModal)
close.addEventListener("click", closeModal)


const scriptURL = "https://script.google.com/macros/s/AKfycbyt3YUU6fMV07Dj1tL-Xxwz6Bn4RHX8S9lzODgQozNLxk0M7epC/exec"
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            document.querySelector("#submitter").value = ""
            document.querySelector("#submitters-email").value = ""
            document.querySelector("#vendor-name").value = ""
            document.querySelector("#phone").value = ""
            document.querySelector("#email").value = ""
            document.querySelector("#comment").value = ""
        })
        .catch(error => console.error('Error!', error.message))
})


let currentImgIndex = 0 
const images = ["images/caulk.jpg", "images/map.jpg", "images/paint.jpg", "images/rr.jpg"]
const mainImage = document.querySelector("#mainImage")
const next = document.querySelector(".next")

mainImage.setAttribute("src", images[currentImgIndex])

next.addEventListener("click", () => {
    if (currentImgIndex >= images.length - 1) {
        currentImgIndex = 0
    } else {
        currentImgIndex += 1
    }
    mainImage.setAttribute("src", images[currentImgIndex])
})

const previous = document.querySelector(".prev")

previous.addEventListener("click", () => {
    if (currentImgIndex === 0) {
        currentImgIndex = 3
    } else {
        currentImgIndex -= 1
    }
    mainImage.setAttribute("src", images[currentImgIndex])
})