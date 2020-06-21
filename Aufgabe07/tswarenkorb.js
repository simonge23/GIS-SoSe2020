"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    loadWarenkorb();
    async function loadWarenkorb() {
        // await communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        await Aufgabe7.communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        warenkorbElemente();
        updatePrice();
    }
    function warenkorbElemente() {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.match("randid")) {
                let keyInt = parseInt(key);
                //DIV
                let newDiv = document.createElement("div");
                newDiv.className = "Produkt";
                document.getElementsByClassName("containerSynthesizer").item(0)?.appendChild(newDiv);
                //IMG
                let imgElement = document.createElement("img");
                imgElement.src = Aufgabe7.articles[keyInt].img;
                newDiv.appendChild(imgElement);
                //NAME
                let name = document.createElement("p");
                name.innerHTML = Aufgabe7.articles[keyInt].name;
                newDiv.appendChild(name);
                //BESCHREIBUNG
                let beschreibung = document.createElement("p");
                beschreibung.innerHTML = Aufgabe7.articles[keyInt].beschreibung;
                newDiv.appendChild(beschreibung);
                //PREIS
                let preis = document.createElement("p");
                preis.innerHTML = Aufgabe7.articles[keyInt].preis + "€";
                newDiv.appendChild(preis);
                //BUY
                let kaufen = document.createElement("button");
                kaufen.innerHTML = "Delete from Cart";
                newDiv.appendChild(kaufen);
                kaufen.addEventListener("click", function (e) {
                    let buttonElement = e.target;
                    let index = String(buttonElement.getAttribute("index"));
                    let parentElement = buttonElement.parentElement;
                    deleteArticle(parentElement, index);
                });
                kaufen.setAttribute("index", key);
            }
        }
    }
    function deleteArticle(target, index) {
        target.setAttribute("style", "display: none");
        localStorage.removeItem(index);
        updatePrice();
    }
    function updatePrice() {
        let price = 0;
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (!key.match("randid")) {
                    price = price + (Aufgabe7.articles[parseInt(key)].preis * parseInt(localStorage.getItem(key)));
                }
            }
        }
        let pricePTag = document.getElementById("preis");
        pricePTag.innerHTML = "Gesamt: " + price.toFixed(2);
        console.log("Price wurde geupdatete");
    }
    Aufgabe7.updatePrice = updatePrice;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=tswarenkorb.js.map