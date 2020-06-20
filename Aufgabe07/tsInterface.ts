namespace Aufgabe7 {

    //Interface Artikel 
    export interface Artikel {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    export let articles: Artikel[] = [];

    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        articles = <Artikel[]>await response.json();
        console.log("Response", response);
    }
    
    //EINKAUFSWAGEN
    let wagenCounter: number = 0;
    let counterAnzeigen: HTMLParagraphElement = document.createElement("p");
    let wagenKreis: HTMLDivElement = document.createElement("div");
    wagenKreis.id = "wagenKreis";
    let gesamtWert: number = 0;

    export function handleAddArticle(_event: Event): void {

        //EINKAUFSWAGEN KREIS
        if (wagenCounter >= 0) {
            document.getElementById("artikelKreis")?.appendChild(wagenKreis);
        }

        wagenCounter++;
        counterAnzeigen.innerHTML = "" + wagenCounter;
        document.getElementById("wagenKreis")?.appendChild(counterAnzeigen);

        let indexButton: string = (<HTMLElement>_event.currentTarget)?.getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);

        if (localStorage.getItem(String(indexNr)) != null) {
            let anzahl: number = parseInt(<string>localStorage.getItem(String(indexNr)));
            anzahl = anzahl + 1;
            localStorage.setItem(String(indexNr), String(anzahl));
        } else {
            localStorage.setItem(String(indexNr), "1");
        }

        gesamtWert = gesamtWert + articles[indexNr].preis;
        console.log(gesamtWert);
    }


}
