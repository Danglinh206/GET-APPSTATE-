const router = require("express").Router();
const { getappstate } = require("../get/appstate");
const { home } = require("../get/home");

router.get ("/getappstate", getappstate);
router.get("/", home);

module.exports = router;