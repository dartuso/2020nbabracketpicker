let picks = {
    EastQuarter1: "", EastQuarter2: "", EastQuarter3: "", EastQuarter4: "",
    EastSemi1: "", EastSemi2: "",
    FinalEast: "",
    Winner: "",
    FinalWest: "",
    WestSemi1: "", WestSemi2: "",
    WestQuarter1: "", WestQuarter2: "", WestQuarter3: "", WestQuarter4: "",
}

const seeds = {
    east: [
        {
            name: "Bucks",
            image: "assets/teams/east/1MIL.svg",
            seed: 1
        },
        {
            name: "Magic",
            image: "assets/teams/east/8ORL.svg",
            seed: 8
        },
        {
            name: "Pacers",
            image: "assets/teams/east/4IND.svg",
            seed: 4
        },
        {
            name: "Heat",
            image: "assets/teams/east/5MIA.svg",
            seed: 5
        },
        {
            name: "Celtics",
            image: "assets/teams/east/3BOS.svg",
            seed: 3
        },
        {
            name: "76ers",
            image: "assets/teams/east/6PHI.svg",
            seed: 6
        },
        {
            name: "Raptors",
            image: "assets/teams/east/2TOR.svg",
            seed: 2
        },
        {
            name: "Nets",
            image: "assets/teams/east/7BKN.svg",
            seed: 7
        }
    ],
    west: [
        {
            name: "Lakers",
            image: "assets/teams/west/1LAL.svg",
            seed: 1
        },
        {
            name: "Trailblazers",
            image: "assets/teams/west/8POR.svg",
            seed: 8
        },
        {
            name: "Houston",
            image: "assets/teams/west/4HOU.svg",
            seed: 4
        },
        {
            name: "Thunder",
            image: "assets/teams/west/5OKC.svg",
            seed: 5
        },
        {
            name: "Nuggets",
            image: "assets/teams/west/3DEN.svg",
            seed: 3
        },
        {
            name: "Jazz",
            image: "assets/teams/west/6UTA.svg",
            seed: 6
        },
        {
            name: "Clippers",
            image: "assets/teams/west/2LAC.svg",
            seed: 2
        },
        {
            name: "Mavericks",
            image: "assets/teams/west/7DAL.svg",
            seed: 7
        },
    ]
}

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
                document.getElementById('es1').alt = "";
            }
        case 'es1':
            if (forward.src === NFE) {
                document.getElementById('nfe').src = "";
                document.getElementById('nfe').alt = "";
            }
            break;
        case 'eq3':
        case 'eq4':
            if (forward.src === ES2) {
                document.getElementById('es2').src = "";
                document.getElementById('es2').alt = "";
            }
        case 'es2':
            if (forward.src === NFE) {
                document.getElementById('nfe').src = "";
                document.getElementById('nfe').alt = "";
            }
            break;
        case 'wq1':
        case 'wq2':
            if (forward.src === WS1) {
                document.getElementById('ws1').src = "";
                document.getElementById('ws1').alt = "";
            }
        case 'ws1':
            if (forward.src === NFW) {
                document.getElementById('nfw').src = "";
                document.getElementById('nfw').alt = "";
            }
            break;
        case 'wq3':
        case 'wq4':
            if (forward.src === WS2) {
                document.getElementById('ws2').src = "";
                document.getElementById('ws2').alt = "";

            }
        case 'ws2':
            if (forward.src === NFW) {
                document.getElementById('nfw').src = "";
                document.getElementById('nfw').alt = "";
            }
            break;
        default:
            break;
    }

    document.getElementById(location).src = img.src
    document.getElementById(location).alt = img.alt
}

function winner(location) {
    if (location === 'nfw') {
        document.getElementById('nfw').style.backgroundColor = "#ffd700"
        document.getElementById('nfe').style.backgroundColor = ""
    } else {
        document.getElementById('nfe').style.backgroundColor = "#ffd700"
        document.getElementById('nfw').style.backgroundColor = ""
    }
    loadBracket(location)
}

function reset() {
    const ids = ['eq1', 'eq2', 'eq3', 'eq4', 'es1', 'es2', 'wq1', 'wq2', 'wq3', 'wq4', 'ws1', 'ws2', 'nfe', 'nfw']
    ids.forEach(
        id => {
            document.getElementById(id).src = ""
        }
    )
}

function loadBracket(winner) {
    document.getElementById(winner).alt = picks.Winner
    document.getElementById('nfe').alt = picks.FinalEast
    document.getElementById('nfw').alt = picks.FinalWest

    document.getElementById('es1').alt = picks.EastSemi1
    document.getElementById('es2').alt = picks.EastSemi2

    document.getElementById('ws1').alt = picks.WestSemi1
    document.getElementById('ws2').alt = picks.WestSemi2

    document.getElementById('wq1').alt = picks.WestQuarter1
    document.getElementById('wq2').alt = picks.WestQuarter2
    document.getElementById('wq3').alt = picks.WestQuarter3
    document.getElementById('wq4').alt = picks.WestQuarter4

    document.getElementById('eq1').alt = picks.EastQuarter1
    document.getElementById('eq2').alt = picks.EastQuarter2
    document.getElementById('eq3').alt = picks.EastQuarter3
    document.getElementById('eq4').alt = picks.EastQuarter4
}