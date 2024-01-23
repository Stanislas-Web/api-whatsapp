function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,    
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function MessageList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ J'ai ces options"
            },
            "footer": {
                "text": "Sélectionnez l'une des options pour que nous puissions vous aider"
            },
            "action": {
                "button": "Voir les options",
                "sections": [
                    {
                        "title": "Acheter et vendre des produits",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Acheter",
                                "description": "Achetez les meilleurs produits pour votre maison"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vendre",
                                "description": "Vendez vos produits"
                            }
                        ]
                    },
                    {
                        "title": "📍Centre d'attention",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agence",
                                "description": "Vous pouvez visiter notre agence."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centre de contact",
                                "description": "L'un de nos agents vous assistera."
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


function MessageComprar(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "Sélectionnez l'un des produits"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Ordinateur portable"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Ordinateur"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}


function MessageLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
        "latitude": "-12.067158831865067",
        "longitude": "-77.03377940839486",
        "name": "Estadio Nacional del Perú",
        "address": "C. José Díaz s/n, Cercado de Lima 15046"
    }
        
    });
    return data;
}

module.exports = {
MessageText,
MessageList,
MessageComprar,
MessageLocation
};






