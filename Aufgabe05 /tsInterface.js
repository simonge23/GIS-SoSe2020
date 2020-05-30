"use strict";
//Artikel Synthesizer
let artikel1 = { img: "bassstation.jpg", name: "Novation Bassstation 2", beschreibung: "Analoger Mono-Synthesizer", preis: "399,00€" };
let artikel2 = { img: "lead4.jpg", name: "Clavia Nord Lead 4", beschreibung: "Virtuell Analoger Performance-Synthesizer", preis: "1.799,00€" };
let artikel3 = { img: "matriarch.jpg", name: "Moog Matriarch", beschreibung: "4-stimmig Paraphoner Semi-Modularer Synthesizer", preis: "2.199,00€" };
let artikel4 = { img: "microkorg.jpg", name: "Korg Microkorg", beschreibung: "Analoger Modeling Synth/Vocoder", preis: "339,00€" };
let artikel5 = { img: "minibrute.jpg", name: "Arturia Minibrute Bundle", beschreibung: "Analoger semi-modularer Synthesizer", preis: "815,00€" };
let artikel6 = { img: "minilogue.png", name: "Korg Minilogue XD", beschreibung: "Hybrider Synthesizer", preis: "569,00€" };
//Artikel Synthesizer Array
let artikelSynthesizer = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
//Artikel Drummachines
let artikel7 = { img: "digitakt.jpg", name: "Elektron Digitakt", beschreibung: "Digital Drummachine", preis: "699,00€" };
let artikel8 = { img: "drumbrute.png", name: "Arturia Drumbrute", beschreibung: "Analog Drummachine", preis: "349,00€" };
let artikel9 = { img: "jomoxalphabase.png", name: "Jomox Alpha Base", beschreibung: "Analoger Drum Synthesizer", preis: "1.699,00€" };
let artikel10 = { img: "mc101.png", name: "Roland MC101", beschreibung: "Portable Groovebox", preis: "449,00€" };
let artikel11 = { img: "mfbtanzbär2.png", name: "MFB Tanzbär 2", beschreibung: "nalog / Digital Hybrid Drum Computer", preis: "979,00€" };
let artikel12 = { img: "rd8.png", name: "Behringer RD8", beschreibung: "Analoge Drummachine", preis: "319,00€" };
//Artikel Drummachines Array
let artikelDrummachines = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
//Synthesizer
for (let index = 0; index < artikelSynthesizer.length; index++) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("allsynth")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = artikelSynthesizer[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);
    //NAME
    let name = document.createElement("p");
    name.innerHTML = artikelSynthesizer[index].name;
    document.getElementById("div1" + index)?.appendChild(name);
    //beschreibung
    let beschreibung = document.createElement("p");
    beschreibung.innerHTML = artikelSynthesizer[index].beschreibung;
    document.getElementById("div1" + index)?.appendChild(beschreibung);
    //PREIS
    let price = document.createElement("p");
    price.innerHTML = artikelSynthesizer[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);
    //BUY
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}
//WOMEN
for (let index = 0; index < artikelDrummachines.length; index++) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("alldrums")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = artikelDrummachines[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);
    //NAME
    let name = document.createElement("p");
    name.innerHTML = artikelDrummachines[index].name;
    document.getElementById("div2" + index)?.appendChild(name);
    //beschreibung
    let beschreibung = document.createElement("p");
    beschreibung.innerHTML = artikelDrummachines[index].beschreibung;
    document.getElementById("div2" + index)?.appendChild(beschreibung);
    //PREIS
    let price = document.createElement("p");
    price.innerHTML = artikelDrummachines[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);
    //BUY
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=tsInterface.js.map