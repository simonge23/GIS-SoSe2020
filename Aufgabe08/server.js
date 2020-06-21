"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe08 = void 0;
const Http = require("http");
var Aufgabe08;
(function (Aufgabe08) {
    //Konsolenausgabe Serverstart
    console.log("Starting server");
    //port Vairable erstellen und port zuweisen
    let port = Number(process.env.PORT);
    //port abchecken und zuweisen
    if (!port)
        port = 8100;
    //Server variable erstellen
    let server = Http.createServer();
    //handler hinzufügen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server soll auf port hören und schauen ob es dort anfragen gibt.
    server.listen(port);
    //Konsolenausgabe
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsolenausgabe
        console.log("I hear voices!");
        //Parameter des Headers der Response festlegen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Konoslenausgabe URL
        _response.write(_request.url);
        console.log(_request.url);
        //response ende
        _response.end();
    }
})(Aufgabe08 = exports.Aufgabe08 || (exports.Aufgabe08 = {}));
//# sourceMappingURL=server.js.map