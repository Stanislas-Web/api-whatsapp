const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const {payment} = require("../shared/payment");

async function Process (textUser, number){
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
    else if(textUser.includes("1 000 FC")) {
        var model = whatsappModel.MessageText("Vous allez voir s'afficher le popup de paiement pour 1 000 Fc. Veuillez confirmer le code PIN.\nVous recevrez une réponse dans l'application dans un court laps de temps ! 😊", number);
        models.push(model);
        await payment("CDF", "AIRTEL", numberWithout43, "13");
        // console.log("Mon numero  "+number);
        // const numberWithout43 = number.substring(3);
        // const suffixNumber = numberWithout43.substring(0, 2);
        // if (suffixNumber == "81" || suffixNumber == "82" || suffixNumber == "83")  {
        //     await payment("CDF", "MPESA", "0"+numberWithout43, "13");
            
        // } else if(suffixNumber == "89" || suffixNumber == "85" || suffixNumber == "84" || suffixNumber == "80") {
        //     await payment("CDF", "ORANGE", "0"+numberWithout43, "13");
            
        // } else if(suffixNumber == "99" || suffixNumber == "98" || suffixNumber == "97"){
        //     await payment("CDF", "AIRTEL", numberWithout43, "13");
        // }else{
        //     var model = whatsappModel.MessageText("Votre numéro n'est pas pris en charge par cet opérateur. Merci de vérifier.", number);
        //     models.push(model);

        // }
    }else if(textUser.includes("0.4 $")) {
        var model = whatsappModel.MessageText("Vous allez voir s'afficher le popup de paiement pour 0.4 $. Veuillez confirmer le code PIN.\nVous recevrez une réponse dans l'application dans un court laps de temps ! 😊", number);
        models.push(model);
        console.log("Mon numero  "+number);
        const numberWithout43 = number.substring(3);
        const suffixNumber = numberWithout43.substring(0, 2);
        if (suffixNumber == "81" || suffixNumber == "82" || suffixNumber == "83")  {
            await payment("USD", "MPESA", "0"+numberWithout43, "13");
            
        } else if(suffixNumber == "89" || suffixNumber == "85" || suffixNumber == "84" || suffixNumber == "80") {
            await payment("USD", "ORANGE", "0"+numberWithout43, "13");
            
        } else if(suffixNumber == "99" || suffixNumber == "98" || suffixNumber == "97"){
            await payment("USD", "AIRTEL", numberWithout43, "13");
        }else{
            var model = whatsappModel.MessageText("Votre numéro n'est pas pris en charge par cet opérateur. Merci de vérifier.", number);
            models.push(model);

        }

        
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