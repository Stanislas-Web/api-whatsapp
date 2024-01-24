const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)
.post("/transacademia", whatsAppController.CreateTransacademia)
.get("/transacademia", whatsAppController.GetTransacademia)

module.exports = router;