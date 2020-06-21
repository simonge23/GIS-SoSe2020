namespace Aufgabe08 {
    let formData: FormData;
    let buttonAction: HTMLButtonElement = <HTMLButtonElement> document.getElementById("send");
    buttonAction.addEventListener("click", handleClick);

    async function handleClick(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://gissose2020simon.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
        //let responseText: string = await response.text();
        //console.log(responseText);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }

}