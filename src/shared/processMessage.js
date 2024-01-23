const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process (textUser, number){
    // textUser= textUser.toLowerCase();
    var models = [];

    if(textUser.toLowerCase().includes("bonjour") || textUser.toLowerCase().includes("salut") || textUser.toLowerCase().includes("slt") || textUser.toLowerCase().includes("bjr") || textUser.toLowerCase().includes("mbote") || textUser.toLowerCase().includes("hello") ){
        //SAUDAR
        var model = whatsappModel.MessageText("Bonjour, c'est un plaisir de vous saluer. 👋", number);
        models.push(model);
        var modelListFrench = whatsappModel.MessageList2(number);
        console.log("mon list "+modelListFrench);
        models.push(modelListFrench);
    }else if(textUser.toLowerCase().includes("hola")){
        //SAUDAR
        var model = whatsappModel.MessageText("Hola, un gusto saludarte. 👋", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.toLowerCase().includes("gracias")){
        // agradecimiento
        var model = whatsappModel.MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);       

    }
    else if(textUser.toLowerCase().includes("adios") ||
    textUser.includes("adiós")||
    textUser.includes("bye")||
    textUser.includes("me voy")
    ){
        // despedir
        var model = whatsappModel.toLowerCase().MessageText("Ve con cuidado. 😊", number);
        models.push(model);
    }
    else if(textUser.includes("1 0000 FC")) {
        var model = whatsappModel.MessageText("Merci de payer 1000 FC. 👋", number);
        models.push(model);

    }
    // else if(textUser.includes("comprar")){
    //     // comprar
    //     var model = whatsappModel.MessageComprar(number);
    //     models.push(model);

    // }
    // else if(textUser.includes("vender")){
    //     // vender
    //     var model = whatsappModel.MessageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
    //     models.push(model);       

    // }
    // else if(textUser.includes("agencia")){
    //     // agencia
    //     var model = whatsappModel.MessageText("Aquí tienes nuestra dirección. 😊", number);
    //     models.push(model);
    //     var modelLocation = whatsappModel.MessageLocation(number);
    //     models.push(modelLocation);       

    // }
    // else if(textUser.includes("contacto")){
    //     // vender
    //     var model = whatsappModel.MessageText("📞*Centro de contacto:*\n912345678", number);
    //     models.push(model);       

    // }
    else{
        //No entiende
        var model = whatsappModel.MessageText("Je ne comprends pas ce que vous dites", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
    


}

module.exports = {
    Process
};