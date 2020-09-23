var myColors = ["pink", "red", "blue", "grey", "green"]
var i = 0 
var myInput = document.getElementsByClassName("myInput")[0]
function changeBackground () {
    document.body.style.backgroundColor = myColors[i]
    i++
    if(i == myColors.length){
        i = 0
    }
}
function addColor() {
    if(myInput.value)
    document.body.style.backgroundColor = myInput.value
    myColors.push(myInput.value)
    myInput.value = ""
}