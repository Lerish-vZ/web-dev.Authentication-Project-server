const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post('/', userVerification);
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
