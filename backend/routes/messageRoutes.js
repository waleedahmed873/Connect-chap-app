const express = require ('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const router = express.Router();
const protectRoute = require ('../middlewares/protectRoutes')

router.get("/:id", protectRoute,getMessages);
router.post("/send/:id", protectRoute,sendMessage);

module.exports = router;