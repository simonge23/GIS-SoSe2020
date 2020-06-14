namespace Produkte {
    window.addEventListener("load", init);

    //Interface Artikel 
    interface Artikel {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    let articles: Artikel[] = [];

    function init(_event: Event): void {  
        communicate("artikel.json");
        buildButtons();
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        articles = <Artikel[]>await response.json();
        loadArtikles(articles);
        console.log("Response", response);
    }

    //Artikel Array
    

    function loadArtikles(_articles: Artikel[]): void {
        for (let index: number = 0; index < _articles.length; index++) {
            console.log(_articles[index]);
            let setDivNr: string;
            let flexKategorie: string;
            if (_articles[index].kategorie == "synth") {
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
            imgElement.src = _articles[index].img;
            document.getElementById("divNr" + index)?.appendChild(imgElement);

            //NAME
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerHTML = _articles[index].name;
            document.getElementById("divNr" + index)?.appendChild(name);

            //BESCHREIBUNG
            let beschreibung: HTMLParagraphElement = document.createElement("p");
            beschreibung.innerHTML = _articles[index].beschreibung;
            document.getElementById("divNr" + index)?.appendChild(beschreibung);

            //PREIS
            let preis: HTMLParagraphElement = document.createElement("p");
            preis.innerHTML = _articles[index].preis + "€";
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
        gesamtWert = gesamtWert + articles[indexNr].preis;
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
    function buildButtons(): void {
    let synthesizerAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#synthesizer");
    synthesizerAnzeigen.addEventListener("click", handleCategoryClick.bind(synthesizerAnzeigen));

    let drummachinesAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#drummachines");
    drummachinesAnzeigen.addEventListener("click", handleCategoryClick.bind(drummachinesAnzeigen));
    }

}
