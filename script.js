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
    return hangmanWords[randomIndex];
  }
  
  const fasit = getRandomHangmanWord()
  console.log(fasit);

  let gjettetOrd = []

  for (let i = 0; i < fasit.length; i++) {
    gjettetOrd.push("_")    
  }

  console.log(gjettetOrd)

  