"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let buttonAction = document.getElementById("send");
    buttonAction.addEventListener("click", handleClick);
    async function handleClick() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://gissose2020simon.herokuapp.com/";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        //let response: Response = await fetch(serverURL);
        //let responseText: string = await response.text();
        //console.log(responseText);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map