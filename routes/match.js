const express = require("express");

const router = express.Router();

const match = require("../modules/match");

// En route der gør at når man går til end point user viser alle users interesser
router.get("/", (req, res)=> {
    res.json(match.match);
});



module.exports = router;