//Interface Synthesizer
interface ArtikelSynthesizer {
    img: string;
    name: string;
    beschreibung: string;
    preis: number;
}

//Artikel Synthesizer
let artikel1: ArtikelSynthesizer = { img: "bassstation.jpg", name: "Novation Bassstation 2", beschreibung: "Analoger Mono-Synthesizer", preis: 399 };
let artikel2: ArtikelSynthesizer = { img: "lead4.jpg", name: "Clavia Nord Lead 4", beschreibung: "Virtuell Analoger Performance-Synthesizer", preis: 1799 };
let artikel3: ArtikelSynthesizer = { img: "matriarch.jpg", name: "Moog Matriarch", beschreibung: "4-stimmig Paraphoner Semi-Modularer Synthesizer", preis: 2199 };
let artikel4: ArtikelSynthesizer = { img: "microkorg.jpg", name: "Korg Microkorg", beschreibung: "Analoger Modeling Synth/Vocoder", preis: 339 };
let artikel5: ArtikelSynthesizer = { img: "minibrute.jpg", name: "Arturia Minibrute Bundle", beschreibung: "Analoger semi-modularer Synthesizer", preis: 815 };
let artikel6: ArtikelSynthesizer = { img: "minilogue.jpg", name: "Korg Minilogue XD", beschreibung: "Hybrider Synthesizer", preis: 569 };


//Artikel Synthesizer Array
let artikelSynthesizer: ArtikelSynthesizer[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];

//Interface Drummachines
interface ArtikelDrummachines {
    img: string;
    name: string;
    beschreibung: string;
    preis: number;
}

//Artikel Drummachines
let artikel7: ArtikelDrummachines = { img: "digitakt.jpg", name: "Elektron Digitakt", beschreibung: "Digital Drummachine", preis: 699 };
let artikel8: ArtikelDrummachines = { img: "drumbrute.jpg", name: "Arturia Drumbrute", beschreibung: "Analog Drummachine", preis: 349 };
let artikel9: ArtikelDrummachines = { img: "jomoxalphabase.jpg", name: "Jomox Alpha Base", beschreibung: "Analoger Drum Synthesizer", preis: 1.699 };
let artikel10: ArtikelDrummachines = { img: "mc101.jpg", name: "Roland MC101", beschreibung: "Portable Groovebox", preis: 449 };
let artikel11: ArtikelDrummachines = { img: "mfbtanzbär2.jpg", name: "MFB Tanzbär 2", beschreibung: "nalog / Digital Hybrid Drum Computer", preis: 979 };
let artikel12: ArtikelDrummachines = { img: "rd8.jpg", name: "Behringer RD8", beschreibung: "Analoge Drummachine", preis: 319 };

//Artikel Drummachines Array
let artikelDrummachines: ArtikelDrummachines[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

//Synthesizer
for (let index: number = 0; index < artikelSynthesizer.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    newDiv.className = "Produkt";
    document.getElementById("allsynth")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelSynthesizer[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelSynthesizer[index].name;
    document.getElementById("div1" + index)?.appendChild(name);

    //BESCHREIBUNG
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = artikelSynthesizer[index].beschreibung;
    document.getElementById("div1" + index)?.appendChild(beschreibung);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelSynthesizer[index].preis + "€";
    document.getElementById("div1" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("div1" + index)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleAddArticle);
}

//Drummachines
for (let index: number = 0; index < artikelDrummachines.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div2" + index;
    newDiv.className = "Produkt";
    document.getElementById("alldrums")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelDrummachines[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelDrummachines[index].name;
    document.getElementById("div2" + index)?.appendChild(name);

    //BESCHREIBUNG
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = artikelDrummachines[index].beschreibung;
    document.getElementById("div2" + index)?.appendChild(beschreibung);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelDrummachines[index].preis + "€";
    document.getElementById("div2" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("div2" + index)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleAddArticle);
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

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);
        gesamtWert = gesamtWert + artikelSynthesizer[indexNr].preis + artikelDrummachines[indexNr].preis;
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



