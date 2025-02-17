function getRandomHangmanWord() {
    const hangmanWords = [
        "Ananas", "Ballong", "Camping", "Drage", "Ekorn", "Flaske", "Gitar", "Huske", "Iskrem", "Jente",
        "Kanel", "Lykke", "Måne", "Nøkkel", "Oter", "Papegøye", "Quiz", "Røyk", "Skole", "Traktor",
        "Ulv", "Vind", "Ørn", "Ære", "Åker", "Blomst", "Sommer", "Høst", "Vinter", "Vår",
        "Banan", "Skorpion", "Fotball", "Løve", "Klokke", "Fersken", "Regnbue", "Hytte", "Kaffekopp", "Bjørn",
        "Sjø", "Sko", "Sykkel", "Tog", "Buss", "Elefant", "Tiger", "Kanin", "Vimpel", "Broccoli",
        "Snømann", "Godteri", "Matpakke", "Skøyter", "Bølge", "Gaffel", "Briller", "Tårn", "Kirke", "Drøm",
        "Kamera", "Kjøkken", "Lommelykt", "Måse", "Panda", "Rev", "Vott", "Skjorte", "Teppe", "Sjiraff",
        "Snøfnugg", "Hårbørste", "Speil", "Sopp", "Eple", "Juletre", "Stjerne", "Glass", "Natt", "Dør",
        "Hjul", "Skjerf", "Trapp", "Laks", "Skjelett", "Vulkan", "Fyrverkeri", "Støvel", "Håndkle", "Kald",
        "Bok", "Slott", "Lykt", "Eventyr", "Dragebåt", "Flyplass", "Skygge", "Fakkel", "Skorpion", "Smørbrød"
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
        feilGjett++;
        if (feilGjett < maksFeil) {
            hangmanBilde.src = hangmanDeler[feilGjett];
        }
        console.log("Bokstaven finnes ikke i ordet:", bokstav)
    }

    visGjettetOrd();
    oppdaterFeilGjett();

    if (!gjettetOrd.includes("_")) {
        alert("Gratulerer! Du vant! Ordet var: " + fasit);
        spillFerdig = true;
    }

    else if (feilGjett >= maksFeil) {
        alert("Du tapte! Ordet var: " + fasit);
        spillFerdig = true;
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