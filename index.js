function image(img, location) {
    document.getElementById(location).src = img.src
}

function color(location) {
    if (location === 'nfw') {
        document.getElementById('nfw').style.backgroundColor = "#ffd700"
        document.getElementById('nfe').style.backgroundColor = ""
    } else {
        document.getElementById('nfe').style.backgroundColor = "#ffd700"
        document.getElementById('nfw').style.backgroundColor = ""
    }
}

function reset() {


    document.getElementById('eq1').src = ""
    document.getElementById('eq2').src = ""
    document.getElementById('eq3').src = ""
    document.getElementById('eq4').src = ""
    document.getElementById('es1').src = ""
    document.getElementById('es2').src = ""

    document.getElementById('wq1').src = ""
    document.getElementById('wq2').src = ""
    document.getElementById('wq3').src = ""
    document.getElementById('wq4').src = ""
    document.getElementById('ws1').src = ""
    document.getElementById('ws2').src = ""

    document.getElementById('nfe').src = ""
    document.getElementById('nfw').src = ""

}