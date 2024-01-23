const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(texteUtilisateur, numero){
    texteUtilisateur = texteUtilisateur.toLowerCase();
    var modèles = [];

    if(texteUtilisateur.includes("bonjour")|| texteUtilisateur.includes("salut") || texteUtilisateur.includes("bonsoir") || texteUtilisateur.includes("hello")){
        // SALUER
        var modèle = whatsappModel.MessageText("Bonjour, c'est un plaisir de vous saluer. 👋", numero);
        modèles.push(modèle);
        var modèleListe = whatsappModel.MessageList(numero);
        modèles.push(modèleListe);
    }
    else if(texteUtilisateur.includes("merci")){
        // REMERCIER
        var modèle = whatsappModel.MessageText("Merci à vous de m'écrire. 😉😎", numero);
        modèles.push(modèle);       
    }
    else if(texteUtilisateur.includes("au revoir") ||
    texteUtilisateur.includes("bye") ||
    texteUtilisateur.includes("je m'en vais")
    ){
        // DIRE AU REVOIR
        var modèle = whatsappModel.MessageText("Partez avec prudence. 😊", numero);
        modèles.push(modèle);
    }
    else if(texteUtilisateur.includes("acheter")){
        // ACHETER
        var modèle = whatsappModel.MessageAcheter(numero);
        modèles.push(modèle);
    }
    else if(texteUtilisateur.includes("vendre")){
        // VENDRE
        var modèle = whatsappModel.MessageText("👉 Inscrivez-vous sur le formulaire suivant pour que nous puissions vous évaluer : https://form.jotform.com/222507994363665", numero);
        modèles.push(modèle);       
    }
    else if(texteUtilisateur.includes("agence")){
        // AGENCER
        var modèle = whatsappModel.MessageText("Voici notre adresse. 😊", numero);
        modèles.push(modèle);
        var modèleEmplacement = whatsappModel.MessageLocation(numero);
        modèles.push(modèleEmplacement);       
    }
    else if(texteUtilisateur.includes("contact")){
        // CONTACT
        var modèle = whatsappModel.MessageText("📞*Centre de contact :*\n912345678", numero);
        modèles.push(modèle);       
    }
    else{
        // NE COMPREND PAS
        var modèle = whatsappModel.MessageText("Je ne comprends pas ce que vous dites", numero);
        modèles.push(modèle);
    }

    modèles.forEach(modèle => {
        whatsappService.SendMessageWhatsApp(modèle);
    });
}


module.exports = {
    Process
};