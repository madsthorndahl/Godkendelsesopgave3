
const express = require("express");

const router = express.Router();

const user = require("../modules/image");
// En route der gør at når man går til end point user viser den alle users
router.get("/", (req, res)=> {
    res.send("Her kan man se billedet");
});