
const express = require("express");

const router = express.Router();

const user = require("../modules/user");
// En route der gør at når man går til end point user viser den alle users
router.get("/", (req, res)=> {
    res.json(user.allUser);
});
// En route der gør at når man går til end point user/free visser den alle free users
router.get("/free", (req, res)=> {
    res.json(user.freeUser);
});
// En route der gør at når man går til end point user/paid visser den alle paid users
router.get("/paid", (req, res)=> {
    res.json(user.payingUser);
});

module.exports = router;