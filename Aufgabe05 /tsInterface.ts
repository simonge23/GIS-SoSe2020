//Interface Synthesizer
interface ArtikelSynthesizer {
    img: string;
    name: string;
    beschreibung: string;
    preis: string;
}

//Artikel Synthesizer
let artikel1: ArtikelSynthesizer = { img: "bassstation.jpg", name: "Novation Bassstation 2", beschreibung: "Analoger Mono-Synthesizer", preis: "399,00€" };
let artikel2: ArtikelSynthesizer = { img: "lead4.jpg", name: "Clavia Nord Lead 4", beschreibung: "Virtuell Analoger Performance-Synthesizer", preis: "1.799,00€" };
let artikel3: ArtikelSynthesizer = { img: "matriarch.jpg", name: "Moog Matriarch", beschreibung: "4-stimmig Paraphoner Semi-Modularer Synthesizer", preis: "2.199,00€" };
let artikel4: ArtikelSynthesizer = { img: "microkorg.jpg", name: "Korg Microkorg", beschreibung: "Analoger Modeling Synth/Vocoder", preis: "339,00€" };
let artikel5: ArtikelSynthesizer = { img: "minibrute.jpg", name: "Arturia Minibrute Bundle", beschreibung: "Analoger semi-modularer Synthesizer", preis: "815,00€" };
let artikel6: ArtikelSynthesizer = { img: "minilogue.jpg", name: "Korg Minilogue XD", beschreibung: "Hybrider Synthesizer", preis: "569,00€" };


//Artikel Synthesizer Array
let artikelSynthesizer: ArtikelSynthesizer[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];

//Interface Drummachines
interface ArtikelDrummachines {
    img: string;
    name: string;
    beschreibung: string;
    preis: string;
}

//Artikel Drummachines
let artikel7: ArtikelDrummachines = { img: "digitakt.jpg", name: "Elektron Digitakt", beschreibung: "Digital Drummachine", preis: "699,00€" };
let artikel8: ArtikelDrummachines = { img: "drumbrute.jpg", name: "Arturia Drumbrute", beschreibung: "Analog Drummachine", preis: "349,00€" };
let artikel9: ArtikelDrummachines = { img: "jomoxalphabase.jpg", name: "Jomox Alpha Base", beschreibung: "Analoger Drum Synthesizer", preis: "1.699,00€" };
let artikel10: ArtikelDrummachines = { img: "mc101.jpg", name: "Roland MC101", beschreibung: "Portable Groovebox", preis: "449,00€" };
let artikel11: ArtikelDrummachines = { img: "mfbtanzbär2.jpg", name: "MFB Tanzbär 2", beschreibung: "nalog / Digital Hybrid Drum Computer", preis: "979,00€" };
let artikel12: ArtikelDrummachines = { img: "rd8.jpg", name: "Behringer RD8", beschreibung: "Analoge Drummachine", preis: "319,00€" };

//Artikel Drummachines Array
let artikelDrummachines: ArtikelDrummachines[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

//Synthesizer
for (let index: number = 0; index < artikelSynthesizer.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("allsynth")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelSynthesizer[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelSynthesizer[index].name;
    document.getElementById("div1" + index)?.appendChild(name);

    //beschreibung
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = artikelSynthesizer[index].beschreibung;
    document.getElementById("div1" + index)?.appendChild(beschreibung);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelSynthesizer[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}

//WOMEN
for (let index: number = 0; index < artikelDrummachines.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("alldrums")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelDrummachines[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelDrummachines[index].name;
    document.getElementById("div2" + index)?.appendChild(name);

    //beschreibung
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = artikelDrummachines[index].beschreibung;
    document.getElementById("div2" + index)?.appendChild(beschreibung);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelDrummachines[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Add to cart";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}