
class interest {
    constructor(sport, movie, art, wine, food){
        this.sport = sport;
        this.movie = movie;
        this.art = art;
        this.wine = wine;
        this.food = food;
        
    }};

//Hardcoder interresser for de to users 

var user1 = new interest("golf", "Spiderman", "Painting", "Red", "Italian");
var user2 = new interest("Batminton", "Batman", "Music", "White", "Italian");

exports.user1Interes = [user1];
exports.user2Interes = [user2];
exports.userInteres = [user1, user2];