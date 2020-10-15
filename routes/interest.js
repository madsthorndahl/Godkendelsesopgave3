
const express = require("express");

const router = express.Router();

const interest = require("../modules/interest");

// En route der gør at når man går til end point user viser alle users interesser
router.get("/", (req, res)=> {
    res.json(interest.userInteres);
});



module.exports = router;