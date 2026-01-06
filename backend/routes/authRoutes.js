const authControllers = require("../controllers/authControllers");

const router = require("express").Router();

router.post("/admin_login", authControllers.admin_login);

module.exports = router;
