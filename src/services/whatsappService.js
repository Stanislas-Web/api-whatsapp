const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/110129175453707/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAOKXpr3YjIBO5pAhduZBEVI449RPzVG3tVcO1tmCr4VzlkVwSgkpYRrh5AEeJwXDwiccCsOYac7AarAWfESdIeV1HwUijzktLUwQctrRNChyb03Qu2zoKwLS55lsLz5WEZC1d6JS8BlUQSXs9DZA9g1rhsps6vEgRc40x0umTEG9jThnNbZAbDZA1jxYQiYJ3CAEzAoAkZBswY5f4SpuY"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};