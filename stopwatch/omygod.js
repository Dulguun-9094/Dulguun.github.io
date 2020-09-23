let minSpan = document.getElementById("min")
let secSpan = document.getElementById("sec")
let doleSpan = document.getElementById("dole")
let x = false
let interval
let q = 1
let w = 1
let e = 1
let qwe = 1
let laps = true
if (x == false) {
    document.getElementById("lapButton")
    document.getElementById("lapButton")
    document.getElementById("lapButton")
}

function start () {
    if (x == false) {
        interval = setInterval(timer, 10)
        x = true
        document.getElementById("startButton").innerHTML = "Pause"
        laps = false
        document.getElementById("lapButton")
        document.getElementById("lapButton")
        document.getElementById("lapButton")

    } else {
        clearInterval(interval)
        x = false
        document.getElementById("startButton").innerHTML = "Start"
        document.getElementById("lapButton")
        document.getElementById("lapButton")
        document.getElementById("lapButton")
        laps = true
    }
}

function timer() {
    if (dole.innerHTML < 9) {
        dole.innerHTML = "0" + q
    } else {
        dole.innerHTML = q
    }
    if (dole.innerHTML > 98) {
        q = 0
        dole.innerHTML = "0" + q
        if (sec.innerHTML < 9) {
            sec.innerHTML = "0" + w
        } else {
            sec.innerHTML = w

        }
        w++
    }
    if (secSpan.innerHTML > 59) {
        w = 0
        secSpan.innerHTML = "0" + w
        w++
        if (min.innerHTML < 9) {
            min.innerHTML = "0" + e
            e++
        } else {
            min.innerHTML = e
            e++

        }
    }

    q++
}

function reset() {

    min.innerHTML = "00"
    sec.innerHTML = "00"
    dole.innerHTML = "00"
    q = 1
    w = 1
    e = 1
    qwe = 1
    clearInterval(interval)
    laps = true
    x = false
    document.getElementById("startButton").innerHTML = "Start"
    document.getElementById("remove").remove()
    let div = document.createElement("div")
    div.setAttribute("id", "remove")
    document.getElementById("lapDiv").append(div)
    document.getElementById("lapButton")
    document.getElementById("lapButton")
    document.getElementById("lapButton")
}


function lap() {
    if (!laps) {
        let p = document.createElement('p')
        p.setAttribute("class", "pTag")
        p.setAttribute("id", "pTag")
        p.innerHTML = "#" + qwe + "     " + min.innerHTML + ":" + sec.innerHTML + ":" + dole.innerHTML
        document.getElementById("remove").append(p)
        qwe++
    }

}