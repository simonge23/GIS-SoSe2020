"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    Aufgabe7.articles = [];
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe7.articles = await response.json();
        console.log("Response", response);
    }
    Aufgabe7.communicate = communicate;
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
        if (localStorage.getItem(String(indexNr)) != null) {
            let anzahl = parseInt(localStorage.getItem(String(indexNr)));
            anzahl = anzahl + 1;
            localStorage.setItem(String(indexNr), String(anzahl));
        }
        else {
            localStorage.setItem(String(indexNr), "1");
        }
        gesamtWert = gesamtWert + Aufgabe7.articles[indexNr].preis;
        console.log(gesamtWert);
    }
    Aufgabe7.handleAddArticle = handleAddArticle;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=tsInterface.js.map