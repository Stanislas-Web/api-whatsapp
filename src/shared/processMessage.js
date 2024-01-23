const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    textUser= textUser.toLowerCase();
    var models = [];

    if(texteUtilisateur.includes("bonjour")|| texteUtilisateur.includes("salut") || texteUtilisateur.includes("bonsoir") || texteUtilisateur.includes("hello")){
        //SAUDAR
        var model = whatsappModel.MessageText("Bonjour, c'est un plaisir de vous saluer. 👋", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("Merci")){
        // agradecimiento
        var model = whatsappModel.MessageText("Merci à vous de m'écrire. 😉😎", number);
        models.push(model);       

    }
    else if(textUser.includes("au revoir") ||
    textUser.includes("bye")||
    textUser.includes("je m'en vais")
    ){
        // despedir
        var model = whatsappModel.MessageText("Partez avec prudence. 😊", number);
        models.push(model);
    }
    else if(textUser.includes("acheter")){
        // comprar
        var model = whatsappModel.MessageComprar(number);
        models.push(model);

    }
    else if(textUser.includes("vendre")){
        // vender
        var model = whatsappModel.MessageText("👉 Inscrivez-vous sur le formulaire suivant pour que nous puissions vous évaluer : https://form.jotform.com/222507994363665", number);
        models.push(model);       

    }
    else if(textUser.includes("agence")){
        // agencia
        var model = whatsappModel.MessageText("Voici notre adresse. 😊", number);
        models.push(model);
        var modelLocation = whatsappModel.MessageLocation(number);
        models.push(modelLocation);       

    }
    else if(textUser.includes("contact")){
        // vender
        var model = whatsappModel.MessageText("📞*Centre de contact :*\n+243826016607", number);
        models.push(model);       

    }
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








