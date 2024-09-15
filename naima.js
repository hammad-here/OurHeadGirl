let video = document.getElementsByTagName("video")[0]
video.controls = false

let ques = document.getElementById("question")

let isSad = false

let other = document.getElementById("other")
let fontSize = 35
let width = 450
let height = 100
let border = 6

document.getElementById("naima").onclick = () => {
    video.style.display = "block"
    video.src = "/happycat.mp4"

    ques.innerText = "YAYYYY!!! 🥳🎉"

     fontSize = 35
     width = 450
     height = 100
     border = 6
     ubdateBtn()
}

document.getElementById("other").onclick = () => {
    if (!isSad) {
        video.style.display = "block"
        video.src = "/emotionalCat.mp4"
        isSad = true
        ques.innerText = "plssss don't 🥺👉👈"
    }

    fontSize *= 0.7
    width *= 0.7
    height *= 0.7
    border *= 0.7

    ubdateBtn()
}

function ubdateBtn(){
    other.style.fontSize = fontSize + "px"
    other.style.width = width + "px"
    other.style.height = height + "px"
    other.style.border = border + "px solid black"
}