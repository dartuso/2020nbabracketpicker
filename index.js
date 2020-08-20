function image(img, location) {
    const forward = document.getElementById(location)
    let ES1 = document.getElementById('es1').src;
    let ES2 = document.getElementById('es2').src;
    let NFE = document.getElementById('nfe').src;
    let WS1 = document.getElementById('ws1').src;
    let WS2 = document.getElementById('ws2').src;
    let NFW = document.getElementById('nfw').src;

    // noinspection FallThroughInSwitchStatementJS
    switch (forward.id) {
        case 'eq1':
        case 'eq2':
            if (forward.src === ES1) {
                document.getElementById('es1').src = "";
            }
        case 'es1':
            if (forward.src === NFE) {
                document.getElementById('nfe').src = "";
            }
            break;
        case 'eq3':
        case 'eq4':
            if (forward.src === ES2) {
                document.getElementById('es2').src = "";
            }
        case 'es2':
            if (forward.src === NFE) {
                document.getElementById('nfe').src = "";
            }
            break;
        case 'wq1':
        case 'wq2':
            if (forward.src === WS1) {
                document.getElementById('ws1').src = "";
            }
        case 'ws1':
            if (forward.src === NFW) {
                document.getElementById('nfw').src = "";
            }
            break;
        case 'wq3':
        case 'wq4':
            if (forward.src === WS2) {
                document.getElementById('ws2').src = "";
            }
        case 'ws2':
            if (forward.src === NFW) {
                document.getElementById('nfw').src = "";
            }
            break;
        default:
            break;
    }

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
        id => {
            document.getElementById(id).src = ""
        }
    )
}