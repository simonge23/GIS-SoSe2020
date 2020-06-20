namespace Aufgabe7 {

    loadWarenkorb();

    async function loadWarenkorb(): Promise<any> {
        // await communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        await communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        warenkorbElemente();
        updatePrice();
    }


    function warenkorbElemente(): void {
        
        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string = <string>localStorage.key(i);
            if (!key.match("randid")) {
                let keyInt: number = parseInt(key);
                //DIV
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.className = "Produkt";
                document.getElementsByClassName("containerSynthesizer").item(0)?.appendChild(newDiv);

                //IMG
                let imgElement: HTMLImageElement = document.createElement("img");
                imgElement.src = articles[keyInt].img;
                newDiv.appendChild(imgElement);

                //NAME
                let name: HTMLParagraphElement = document.createElement("p");
                name.innerHTML = articles[keyInt].name;
                newDiv.appendChild(name);

                //BESCHREIBUNG
                let beschreibung: HTMLParagraphElement = document.createElement("p");
                beschreibung.innerHTML = articles[keyInt].beschreibung;
                newDiv.appendChild(beschreibung);

                //PREIS
                let preis: HTMLParagraphElement = document.createElement("p");
                preis.innerHTML = articles[keyInt].preis + "€";
                newDiv.appendChild(preis);

                //BUY
                let kaufen: HTMLButtonElement = document.createElement("button");
                kaufen.innerHTML = "Delete from Cart";
                newDiv.appendChild(kaufen);
                kaufen.addEventListener("click", function(e: Event): void {
                    let buttonElement: HTMLElement = <HTMLElement>e.target;
                    let index: string = String(buttonElement.getAttribute("index"));
                    let parentElement: HTMLElement = <HTMLElement>buttonElement.parentElement;
            
                    deleteArticle(parentElement, index);
                });
                kaufen.setAttribute("index", key);
            }
        }
    }

    function deleteArticle(target: HTMLElement, index: string): void {
        target.setAttribute("style", "display: none");
        localStorage.removeItem(index);
        updatePrice();
    }

    export function updatePrice(): void {
        let price: number = 0;
        if (localStorage.length > 0) {
            for (let i: number = 0; i < localStorage.length; i++) {
                let key: string = <string>localStorage.key(i);
                if (!key.match("randid")) {
                    price = price +  (articles[parseInt(key)].preis * parseInt(<string>localStorage.getItem(key)));
                }
            }
        }
        let pricePTag: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("preis");
        pricePTag.innerHTML = "Gesamt: " + price.toFixed(2);
        console.log("Price wurde geupdatete");
    }
}