//Interface Artikel 
interface Artikel {
    img: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: string;
}

//Artikel Synthesizer
let artikel1: Artikel = { img: "bassstation.jpg", name: "Novation Bassstation 2", beschreibung: "Analoger Mono-Synthesizer", kategorie: "synth", preis: 399 };
let artikel2: Artikel = { img: "lead4.jpg", name: "Clavia Nord Lead 4", beschreibung: "Virtuell Analoger Performance-Synthesizer", kategorie: "synth", preis: 1799 };
let artikel3: Artikel = { img: "matriarch.jpg", name: "Moog Matriarch", beschreibung: "4-stimmig Paraphoner Semi-Modularer Synthesizer", kategorie: "synth", preis: 2199 };
let artikel4: Artikel = { img: "microkorg.jpg", name: "Korg Microkorg", beschreibung: "Analoger Modeling Synth/Vocoder", kategorie: "synth", preis: 339 };
let artikel5: Artikel = { img: "minibrute.jpg", name: "Arturia Minibrute Bundle", beschreibung: "Analoger semi-modularer Synthesizer", kategorie: "synth", preis: 815 };
let artikel6: Artikel = { img: "minilogue.jpg", name: "Korg Minilogue XD", beschreibung: "Hybrider Synthesizer", kategorie: "synth", preis: 569 };

//Artikel Drummachines
let artikel7: Artikel = { img: "digitakt.jpg", name: "Elektron Digitakt", beschreibung: "Digital Drummachine", kategorie: "drum", preis: 699 };
let artikel8: Artikel = { img: "drumbrute.jpg", name: "Arturia Drumbrute", beschreibung: "Analog Drummachine", kategorie: "drum", preis: 349 };
let artikel9: Artikel = { img: "jomoxalphabase.jpg", name: "Jomox Alpha Base", beschreibung: "Analoger Drum Synthesizer", kategorie: "drum", preis: 1.699 };
let artikel10: Artikel = { img: "mc101.jpg", name: "Roland MC101", beschreibung: "Portable Groovebox", kategorie: "drum", preis: 449 };
let artikel11: Artikel = { img: "mfbtanzbär2.jpg", name: "MFB Tanzbär 2", beschreibung: "nalog / Digital Hybrid Drum Computer", kategorie: "drum", preis: 979 };
let artikel12: Artikel = { img: "rd8.jpg", name: "Behringer RD8", beschreibung: "Analoge Drummachine", kategorie: "drum", preis: 319 };

//Artikel Array
let artikelAll: Artikel[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
loadArtikles();

function loadArtikles(): void {
    for (let index: number = 0; index < artikelAll.length; index++) {
    let setDivNr: string;
    let flexKategorie: string;
    if (artikelAll[index].kategorie == "synth") {
            flexKategorie = "allsynth";
        } else {
            flexKategorie = "alldrums";
        }
    setDivNr = "divNr";

    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = setDivNr + index;
    newDiv.className = "Produkt";
    document.getElementById(flexKategorie)?.appendChild(newDiv);

    console.log(setDivNr, index);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelAll[index].img;
    document.getElementById("divNr" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelAll[index].name;
    document.getElementById("divNr" + index)?.appendChild(name);

    //BESCHREIBUNG
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = artikelAll[index].beschreibung;
    document.getElementById("divNr" + index)?.appendChild(beschreibung);

    //PREIS
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = artikelAll[index].preis + "€";
    document.getElementById("divNr" + index)?.appendChild(preis);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("divNr" + index)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleAddArticle);
    kaufen.setAttribute("index", index.toString());
    }
}
    //EINKAUFSWAGEN
let wagenCounter: number = 0;
let counterAnzeigen: HTMLParagraphElement = document.createElement("p");
let wagenKreis: HTMLDivElement = document.createElement("div");
wagenKreis.id = "wagenKreis";
let gesamtWert: number = 0;

function handleAddArticle(_event: Event): void {

        //EINKAUFSWAGEN KREIS
        if (wagenCounter >= 0) {
            document.getElementById("artikelKreis")?.appendChild(wagenKreis);
        }

        wagenCounter++;
        counterAnzeigen.innerHTML = "" + wagenCounter;
        document.getElementById("wagenKreis")?.appendChild(counterAnzeigen);

        let indexButton: string = (<HTMLElement>_event.currentTarget)?.getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);
        gesamtWert = gesamtWert + artikelAll[indexNr].preis;
        console.log(gesamtWert);
    }

    //KATEGORIE 
function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
    switch (this.getAttribute("id")) {
    case "synthesizer":
    synthesizer();
    break;
    case "drummachines":
    drummachines();
    break;
}

    function synthesizer(): void {
    (<HTMLElement>document.getElementById("allsynth")).style.display = "flex";
    (<HTMLElement>document.getElementById("alldrums")).style.display = "none";

}

    function drummachines(): void {
    (<HTMLElement>document.getElementById("alldrums")).style.display = "flex";
    (<HTMLElement>document.getElementById("allsynth")).style.display = "none";
   
    }
}

let synthesizerAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#synthesizer");
synthesizerAnzeigen.addEventListener("click", handleCategoryClick.bind(synthesizerAnzeigen));

let drummachinesAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#drummachines");
drummachinesAnzeigen.addEventListener("click", handleCategoryClick.bind(drummachinesAnzeigen));



