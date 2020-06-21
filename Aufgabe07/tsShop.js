"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    window.addEventListener("load", init);
    async function init(_event) {
        //communicate("http://127.0.0.1:5500/Aufgabe07/artikel.json");
        await Aufgabe7.communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        loadArtikles(Aufgabe7.articles);
        buildButtons();
    }
    function loadArtikles(_articles) {
        for (let index = 0; index < _articles.length; index++) {
            console.log(_articles[index]);
            let setDivNr;
            let flexKategorie;
            if (_articles[index].kategorie == "synth") {
                flexKategorie = "allsynth";
            }
            else {
                flexKategorie = "alldrums";
            }
            setDivNr = "divNr";
            //DIV
            let newDiv = document.createElement("div");
            newDiv.id = setDivNr + index;
            newDiv.className = "Produkt";
            document.getElementById(flexKategorie)?.appendChild(newDiv);
            console.log(setDivNr, index);
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = _articles[index].img;
            document.getElementById("divNr" + index)?.appendChild(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = _articles[index].name;
            document.getElementById("divNr" + index)?.appendChild(name);
            //BESCHREIBUNG
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = _articles[index].beschreibung;
            document.getElementById("divNr" + index)?.appendChild(beschreibung);
            //PREIS
            let preis = document.createElement("p");
            preis.innerHTML = _articles[index].preis + "€";
            document.getElementById("divNr" + index)?.appendChild(preis);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Add to cart";
            document.getElementById("divNr" + index)?.appendChild(kaufen);
            kaufen.addEventListener("click", Aufgabe7.handleAddArticle);
            kaufen.setAttribute("index", index.toString());
        }
    }
    Aufgabe7.loadArtikles = loadArtikles;
    function buildButtons() {
        let synthesizerAnzeigen = document.querySelector("#synthesizer");
        synthesizerAnzeigen.addEventListener("click", handleCategoryClick.bind(synthesizerAnzeigen));
        let drummachinesAnzeigen = document.querySelector("#drummachines");
        drummachinesAnzeigen.addEventListener("click", handleCategoryClick.bind(drummachinesAnzeigen));
    }
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
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=tsShop.js.map