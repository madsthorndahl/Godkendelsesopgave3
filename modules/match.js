
const interest = require("../modules/interest"); 

//Laver mine to users oblysninger om fra objekttil array
const user1Aray = Object.values(interest.user1Interes);
const user2Aray = Object.values(interest.user2Interes);

// Laver et loop der kører begge arrays igennem og pusher entries op i et tomt aray når de matcher
function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if (a[i] == b[e]) { matches.push(a[i]);}
// Hvis længden på det array er over 2 skal det være et match
            if (matches.length >= 2) {
                return "It's a match" 
            } else {
                return "It's not a match"
            } 
}}}


var match = getMatch(user1Aray, user2Aray);

exports.match = match;