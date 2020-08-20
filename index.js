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
    const ids = ['eq1', 'eq2', 'eq3', 'eq4', 'es1', 'es2', 'wq1', 'wq2', 'wq3', 'wq4', 'ws1', 'ws2', 'nfe', 'nfw']
    ids.forEach(
        id => {document.getElementById(id).src = ""
        }
    )
}