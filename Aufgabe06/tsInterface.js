"use strict";
//Artikel Synthesizer
let artikel1 = { img: "bassstation.jpg", name: "Novation Bassstation 2", beschreibung: "Analoger Mono-Synthesizer", kategorie: "synth", preis: 399 };
let artikel2 = { img: "lead4.jpg", name: "Clavia Nord Lead 4", beschreibung: "Virtuell Analoger Performance-Synthesizer", kategorie: "synth", preis: 1799 };
let artikel3 = { img: "matriarch.jpg", name: "Moog Matriarch", beschreibung: "4-stimmig Paraphoner Semi-Modularer Synthesizer", kategorie: "synth", preis: 2199 };
let artikel4 = { img: "microkorg.jpg", name: "Korg Microkorg", beschreibung: "Analoger Modeling Synth/Vocoder", kategorie: "synth", preis: 339 };
let artikel5 = { img: "minibrute.jpg", name: "Arturia Minibrute Bundle", beschreibung: "Analoger semi-modularer Synthesizer", kategorie: "synth", preis: 815 };
let artikel6 = { img: "minilogue.jpg", name: "Korg Minilogue XD", beschreibung: "Hybrider Synthesizer", kategorie: "synth", preis: 569 };
//Artikel Drummachines
let artikel7 = { img: "digitakt.jpg", name: "Elektron Digitakt", beschreibung: "Digital Drummachine", kategorie: "drum", preis: 699 };
let artikel8 = { img: "drumbrute.jpg", name: "Arturia Drumbrute", beschreibung: "Analog Drummachine", kategorie: "drum", preis: 349 };
let artikel9 = { img: "jomoxalphabase.jpg", name: "Jomox Alpha Base", beschreibung: "Analoger Drum Synthesizer", kategorie: "drum", preis: 1.699 };
let artikel10 = { img: "mc101.jpg", name: "Roland MC101", beschreibung: "Portable Groovebox", kategorie: "drum", preis: 449 };
let artikel11 = { img: "mfbtanzbär2.jpg", name: "MFB Tanzbär 2", beschreibung: "nalog / Digital Hybrid Drum Computer", kategorie: "drum", preis: 979 };
let artikel12 = { img: "rd8.jpg", name: "Behringer RD8", beschreibung: "Analoge Drummachine", kategorie: "drum", preis: 319 };
//Artikel Array
let artikelAll = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
loadArtikles();
function loadArtikles() {
    for (let index = 0; index < artikelAll.length; index++) {
        let setKategorie;
        let flexKategorie;
        if (artikelAll[index].kategorie == "synth") {
            setKategorie = "divNr";
            flexKategorie = "allsynth";
        }
        else {
            setKategorie = "divNr2";
            flexKategorie = "alldrums";
        }
        //DIV
        let newDiv = document.createElement("div");
        newDiv.id = setKategorie + index;
        document.getElementById(flexKategorie)?.appendChild(newDiv);
        newDiv.setAttribute("index", index.toString());
        console.log(setKategorie, index);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = artikelAll[index].img;
        document.getElementById("div1" + index)?.appendChild(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = artikelAll[index].name;
        document.getElementById("div1" + index)?.appendChild(name);
        //BESCHREIBUNG
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = artikelAll[index].beschreibung;
        document.getElementById("div1" + index)?.appendChild(beschreibung);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = artikelAll[index].preis + "€";
        document.getElementById("div1" + index)?.appendChild(price);
        //BUY
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Add to cart";
        document.getElementById("div1" + index)?.appendChild(kaufen);
        kaufen.addEventListener("click", handleAddArticle);
        //kaufen.setAttribute("index", index.toString());
    }
}
//EINKAUFSWAGEN
let wagenCounter = 0;
let counterAnzeigen = document.createElement("p");
let wagenKreis = document.createElement("div");
wagenKreis.id = "wagenKreis";
let gesamtWert = 0;
function handleAddArticle(_event) {
    //EINKAUFSWAGEN KREIS
    if (wagenCounter >= 0) {
        document.getElementById("artikelKreis")?.appendChild(wagenKreis);
    }
    wagenCounter++;
    counterAnzeigen.innerHTML = "" + wagenCounter;
    document.getElementById("wagenKreis")?.appendChild(counterAnzeigen);
    let indexButton = _event.currentTarget?.getAttribute("index");
    let indexNr = parseInt(indexButton);
    gesamtWert = gesamtWert + artikelAll[indexNr].preis;
    console.log(gesamtWert);
}
//KATEGORIE 
function handleCategoryClick(_click) {
    switch (this.getAttribute("id")) {
        case "synthesizer":
            synthesizer();
            break;
        case "drummachines":
            drummachines();
            break;
    }
    function synthesizer() {
        document.getElementById("allsynth").style.display = "flex";
        document.getElementById("alldrums").style.display = "none";
    }
    function drummachines() {
        document.getElementById("alldrums").style.display = "flex";
        document.getElementById("allsynth").style.display = "none";
    }
}
let synthesizerAnzeigen = document.querySelector("#synthesizer");
synthesizerAnzeigen.addEventListener("click", handleCategoryClick.bind(synthesizerAnzeigen));
let drummachinesAnzeigen = document.querySelector("#drummachines");
drummachinesAnzeigen.addEventListener("click", handleCategoryClick.bind(drummachinesAnzeigen));
//# sourceMappingURL=tsInterface.js.map