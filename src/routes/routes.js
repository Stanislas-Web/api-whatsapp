const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");
const CheckEndpoint =  require("../controllers/whatsappControllers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)
.post("/transacademia", whatsAppController.CheckEndpoint)

module.exports = router;