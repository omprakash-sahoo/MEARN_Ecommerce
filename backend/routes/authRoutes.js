const authControllers = require("../controllers/authControllers");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/admin_login", authMiddleware, authControllers.admin_login);

module.exports = router;
