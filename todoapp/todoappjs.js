let inputValue = document.getElementById("input")
let y = 1
function enter() {
    if(inputValue.value==""){
        alert("noinp")
    }else {
        let span = document.createElement("span")
        span.innerHTML = y + " . " + inputValue.value
        let button = document.createElement("span")
        button.innerHTML = " - "
        let div = document.createElement("div")
        div.setAttribute("id", "div" + y)
        document.getElementById("inval").appendChild(div)
        document.getElementById("div" + y).appendChild(span)
        document.getElementById("div" + y).appendChild(button)
        button.onclick = function(){
            div.remove()
        }
        y++
        inputValue.value=""
    }
    
    
}