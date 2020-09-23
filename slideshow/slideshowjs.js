var myImages = ["img/106774.jpg", "img/303042.png", "img/528725.jpg", "img/614743.png"]
var imgElements = document.querySelector("img")
var i = 0
var isPaused = false

function togglePause() {
    if(!isPaused){
        clearInterval(slide)
    }
    else{
        slide = setInterval(myFunction,1000)
    }
    isPaused = !isPaused
}
function myFunction() {
    imgElements.src = myImages[i]
    i++
    if(i == myImages.length){
        i = 0
    }
}
var slide = setInterval(myFunction, 1000)