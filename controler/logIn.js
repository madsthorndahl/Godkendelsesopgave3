const users = require('../modules/user')
var jwt = require('jsonwebtoken');



function loginController(req, res) {
    //Springer over at se på brugernavn og password til login
    var user = users.freeUser
    //normalt vil man gemme secret key et andet sted. 
    //Her laves en token, som dør om en time 
    const token = jwt.sign({user}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController
