const express = require("express");
const uploadImageMiddleware = require("./middleware/uploadMiddleware");
const uploadImage = require("./upload");
const router = express.Router();

router.post("/upload", uploadImageMiddleware.single("file"), uploadImage);

module.exports = router;
