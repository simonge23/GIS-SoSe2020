"use strict";
var Produkte;
(function (Produkte) {
    window.addEventListener("load", init);
    let articles = [];
    function init(_event) {
        //communicate("http://127.0.0.1:5500/Aufgabe07/artikel.json");
        communicate("https://simonge23.github.io/GIS-SoSe2020/Aufgabe07/artikel.json");
        buildButtons();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        articles = await response.json();
        loadArtikles(articles);
        console.log("Response", response);
    }
    //Artikel Array
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
            kaufen.addEventListener("click", handleAddArticle);
            kaufen.setAttribute("index", index.toString());
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
        gesamtWert = gesamtWert + articles[indexNr].preis;
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
    function buildButtons() {
        let synthesizerAnzeigen = document.querySelector("#synthesizer");
        synthesizerAnzeigen.addEventListener("click", handleCategoryClick.bind(synthesizerAnzeigen));
        let drummachinesAnzeigen = document.querySelector("#drummachines");
        drummachinesAnzeigen.addEventListener("click", handleCategoryClick.bind(drummachinesAnzeigen));
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=tsInterface.js.map