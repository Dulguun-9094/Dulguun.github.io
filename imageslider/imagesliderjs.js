let y = 1

function next() {
    if (y == 5) {
        y = y - y
    }
    y++
    document.getElementById("next").href = "#slide-" + y
}

function prev() {
    if (y == 1) {
        y = y + 5
    }
    y--
    document.getElementById("prev").href = "#slide-" + y
}