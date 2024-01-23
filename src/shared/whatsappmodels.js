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

function MessageList2(number){
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
                "text": "Selectionner votre abonnement"
            },
            "action": {
                "button": "Voir les options",
                "sections": [
                    {
                        "title": "26 jours",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "78 000 FC",
                                // "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "31.2 $",
                                // "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "14 jours",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "28 000 FC",
                                // "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "11.2 $",
                                // "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "1 jour",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "1 000 FC",
                                // "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "0.4 $",
                                // "description": "Vende tus productos"
                            }
                        ]
                    },
                    // {
                    //     "title": "📍Centro de atención",
                    //     "rows": [
                    //         {
                    //             "id": "main-agencia",
                    //             "title": "Agencia",
                    //             "description": "Puedes visitar nuestra agencia."
                    //         },
                    //         {
                    //             "id": "main-contacto",
                    //             "title": "Centro de contacto",
                    //             "description": "Te atenderá uno de nuestro agentes."
                    //         }
                    //     ]
                    // }
                ]
            }
        }
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
                "text": "Sélectionnez l'une des options pour que nous puissions vous aider"
            },
            "action": {
                "button": "Voir les options",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
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

function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
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
MessageListFrench,
MessageList2
};