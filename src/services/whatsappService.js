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
            Authorization: "Bearer EAAOKXpr3YjIBO42OOQact4ZBeeDVX8L76ZCJzgI1NGJqCnDwBHT8SuZBfwXwVl5784NaQWl93WXEwMlPwAae5t6iGZAjrUokCZA6vDlbbMIj0ufuUeYB5Nxbsqs7EUPoey8x9mPSslBAyU1ZAZBiHB3a9JNRADCKkLhcC4nwzErqnLCNKoGCcyd6WF9CVMHqPMAdvBhCJA3n4XWZCaqmbQcZD"
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