function getRandomHangmanWord() {
    const hangmanWords = [
        "Albania", "Tirana", "Andorra", "Andorra la Vella", "Armenia", "Yerevan", "Østerrike", "Wien",
        "Aserbajdsjan", "Baku", "Hviterussland", "Minsk", "Belgia", "Brussel", "Bosnia Hercegovina", "Sarajevo",
        "Bulgaria", "Sofia", "Kroatia", "Zagreb", "Kypros", "Nikosia", "Tsjekkia", "Praha",
        "Danmark", "København", "Estland", "Tallinn", "Finland", "Helsinki", "Frankrike", "Paris",
        "Georgia", "Tbilisi", "Tyskland", "Berlin", "Hellas", "Athen", "Ungarn", "Budapest",
        "Island", "Reykjavik", "Irland", "Dublin", "Italia", "Roma", "Kasakhstan", "Astana",
        "Latvia", "Riga", "Liechtenstein", "Vaduz", "Litauen", "Vilnius", "Luxembourg", "Luxembourg",
        "Malta", "Valletta", "Moldova", "Chișinău", "Monaco", "Monaco", "Montenegro", "Podgorica",
        "Nederland", "Amsterdam", "Nord Makedonia", "Skopje", "Norge", "Oslo", "Polen", "Warszawa",
        "Portugal", "Lisboa", "Romania", "București", "Russland", "Moskva", "San Marino", "San Marino",
        "Serbia", "Beograd", "Slovakia", "Bratislava", "Slovenia", "Ljubljana", "Spania", "Madrid",
        "Sverige", "Stockholm", "Sveits", "Bern", "Tyrkia", "Ankara", "Ukraina", "Kyiv",
        "Storbritannia", "London", "Vatikanstaten", "Vatikanstaten"
    ];

    const randomIndex = Math.floor(Math.random() * hangmanWords.length);
    return hangmanWords[randomIndex].toLowerCase();
}


const fasit = getRandomHangmanWord()
console.log(fasit);

let gjettetOrd = []

for (let i = 0; i < fasit.length; i++) {
    gjettetOrd.push("_")
}

console.log(gjettetOrd)

const maksFeil = 6;
let feilGjett = 0;
let spillFerdig = false;
const hangmanBilde = document.getElementById("hangmanBilde")

const hangmanDeler = [
    "bilder/hangmanHode.jpg",
    "bilder/hangmanKropp.jpg",
    "bilder/hangmanHArm.jpg",
    "bilder/hangmanVArm.jpg",
    "bilder/hangmanHFot.jpg",
    "bilder/hangmanVFot.jpg",
]

function oppdaterFeilGjett() {
    let feilGjettElement = document.getElementById("feilGjett");
    feilGjettElement.textContent = "Antall feilgjett: " + feilGjett + "/" + maksFeil;
}

function gjettBokstav(bokstav) {
    if (spillFerdig) return;

    let knapp = document.getElementById(bokstav)
    if (!knapp) return;

    let funnet = false;

    for (let i = 0; i < fasit.length; i++) {
        const element = fasit[i];
        if (element == bokstav) {
            console.log("bokstaven finnes på plass", i)
            gjettetOrd[i] = bokstav
            funnet = true;
        }
    }

    if (funnet) {
        console.log("Bokstaven finnes i ordet:", bokstav)
        knapp.style.backgroundColor = "green";
    } else{
        knapp.style.backgroundColor = "red";
        if (feilGjett < maksFeil) {
            hangmanBilde.src = hangmanDeler[feilGjett];
        }
        console.log("Bokstaven finnes ikke i ordet:", bokstav)

        feilGjett++;
    }

    visGjettetOrd();
    oppdaterFeilGjett();
    
    const lydSeier = new Audio("lyder/seier.mp3")
    const lydTap = new Audio("lyder/tap.mp3")

    if (!gjettetOrd.includes("_")) {
        lydSeier.play()
        setTimeout(function() {
            alert("Gratulerer! Du vant! Ordet var: " + fasit);
            spillFerdig = true;
          }, 10);
    }

    else if (feilGjett >= maksFeil) {
        lydTap.play() 
        setTimeout(function() {
            alert("Du tapte! Ordet var: " + fasit);
            spillFerdig = true;
          }, 100);
    }
}

function visGjettetOrd() {
    document.getElementById("gjettetOrd").innerText = gjettetOrd.join(" ");
}

visGjettetOrd();

function tasteTrykk(event) {
    gjettBokstav(event.key.toLowerCase());

}

document.addEventListener("keydown", tasteTrykk)