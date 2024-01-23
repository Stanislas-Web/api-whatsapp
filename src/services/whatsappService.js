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
            Authorization: "Bearer EAAOKXpr3YjIBO6rEBNbZBR7YmeknEYfmupvAPCtLX9af4wQ8sBPxs4w1Ykn12pUMbfZCU7CIH84j8chPEYqswURj2lkJuuNZAQv3sjzcslBDzXk7tyALOsFUsEX3oZB6h8h4wpqP7QcJw63UWHbw5DwjvHgedrW7w9ZBaOeufuOqy9JxdtZBwfCwfE2mDZBJqlyuxkysiieGv5JbvGZAgWIZD"
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