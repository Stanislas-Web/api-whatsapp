
const axios = require('axios');
const FormData = require('form-data');


async function payment(currency, provider, walletId, abonnement) {
    try {
        let data = new FormData();
        data.append('currency', currency);
        data.append('provider', provider);
        data.append('walletID', walletId);
        data.append('etudiantID', 'STDTAC20230330092HFM5UM110173');
        data.append('abonnementID', abonnement);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://tag.trans-academia.cd/Api_abonnement.php',
            headers: {
                ...data.getHeaders()
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {

        console.error("Erreur Axios :", error.message);
    }
}


module.exports = {
    payment,
};


