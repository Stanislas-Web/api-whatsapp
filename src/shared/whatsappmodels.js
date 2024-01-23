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

function MessageListFrench(number){
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
                "text": "Choisissez votre abonnement."
            },
            "action": {
                "button": "Voir les options",
                "sections": [
                    {
                        "title": "Acheter et vendre des produits",
                        "rows": [
                            {
                                "id": "main-comprar1",
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
                                "id": "main-agencia1",
                                "title": "Agence",
                                "description": "Vous pouvez visiter notre agence.."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centre de contact",
                                "description": "L'un de nos agents vous assistera.."
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Abonnement"
            },
            "footer": {
                "text": "Choisissez votre abonnement."
            },
            "action": {
                "button": "Voir les options",
                "sections": [
                    {
                        "title": "26 Jours | 7800 fc | 31.2 $",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "7800 fc",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "31.2 $",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "📍Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes."
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
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
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
MessageLocation,
MessageListFrench
};