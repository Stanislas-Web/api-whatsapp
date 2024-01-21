const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
.get("/", whatsAppController.VerifyToken)
.get("/hello", whatsAppController.Hello)
.post("/", whatsAppController.ReceivedMessage)

module.exports = router;