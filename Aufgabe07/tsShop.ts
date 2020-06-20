namespace Aufgabe7 {
    window.addEventListener("load", init);

    async function init(_event: Event): Promise<any> {  
        //communicate("http://127.0.0.1:5500/Aufgabe07/artikel.json");
        await communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        loadArtikles(articles);
        buildButtons();
    }

    export function loadArtikles(_articles: Artikel[]): void {
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

    function buildButtons(): void {
        let synthesizerAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#synthesizer");
        synthesizerAnzeigen.addEventListener("click", handleCategoryClick.bind(synthesizerAnzeigen));
    
        let drummachinesAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#drummachines");
        drummachinesAnzeigen.addEventListener("click", handleCategoryClick.bind(drummachinesAnzeigen));
    }

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


}