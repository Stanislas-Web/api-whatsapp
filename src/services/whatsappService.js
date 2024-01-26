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
            Authorization: "Bearer EAAOKXpr3YjIBOxZBn3adS8GupUQz7LDbElS2mcwpChcswQ5CNGFzSYdzXU8ZCZBpSqtWaVV87b3gBdbrZCO2KEftgx9KxiCAFnx5fMolEMDQ7l92aZBPvk2mhjGWRtjg89iFJad6Yol5ipZCyPxOW51BI3x9ZB9ZCxSi431ZBo5Kz5V9SP6ypvB6QrVc3M7R6CZCmrPxbLE9HCmFHbMgZCBrWm9"
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