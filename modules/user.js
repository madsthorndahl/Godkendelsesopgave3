
class user {

    constructor(name, birthday, gender, location, email, password, uniqueUserID, cardNumber, match)
        {
      
        this.name = name
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        this.email = email;
        this.password = password;
        this.uniqueUserID = uniqueUserID;
        this.cardNumber = cardNumber;
        this.match = match;
       
    }};
// Generer et userID som tæller op af alt efter hvornår man har oprettet en profil.
/*generateUserID() {
           
    var counter = 0;
    return function () {counter += 1; return counter}   
}
    };*/
// tag userid fra den som man har liket og skriv ind i et array
    

class freeUser extends user{  
            constructor(name, birthday, gender, location, email, password, uniqueUserID, match){
            super(name, birthday, gender, location, email, password, uniqueUserID, match);
        }};
        

class paymentUser extends user{
    
    constructor(name, birthday, gender, location, email, password, uniqueUserID, cardNumber, match,
            cardHolderName, experationDate, CVCNumber){
                super(name, birthday, gender, location, email, password, uniqueUserID, cardNumber, match)
                    this.cardHolderName = cardHolderName;
                    this.experationDate = experationDate;
                    this.CVCNumber = CVCNumber;   
}}

var user1 = new freeUser("christian", [1998, 09, 08], "male", "Copenhage", "chrhansen@gmail.com", "Password12", 
1, "Elin");

var user2 = new paymentUser("Elin", [1997, 10, 11], "female", "Malmo", "eline@gmail.com", "Password11", 
2, 1234567890123456, "Christian", "Elin Elinsen", [2022, 01, 02], 007);

exports.freeUser = [user1];
exports.payingUser = [user2];
exports.allUser = [user1, user2]; 


//create a new user 

// validate om det er en paid eller free user
/*function validatePaid() {
    var x = document.getElementById("cardNumber").value;
    if (x == null) {
// Her er brugerens oplysninger hard codet, men det skal inporteres fra det samme HTML-form som der reffereres til to linjer oppe.
       var newUser = new freeUser (this.name, this.birthday, this.gender, this.location, this.email, 
       this.password, generateUserID());
// Hvis der er et kortnummer oppretes en betalende bruger        
    } else {
        var newUser = new paymentUser (this.name, this.birthday, this.gender, this.location, this.email, 
            this.password, generateUserID(), this.cardHolderName, this.experationDate, this.cardNumber, this.CVCNumber);

       }
    }
   */



//laver to nye users


/*
class interst extends user {
    constructor(name,)
    super(name)
    //hvis personen liker CRUD til en liste med alle folk som de liker

};
//laver et tomt array der indholde ID på alle dem man har liket
var likedPersons = [];

class match extends interst {
    constructor(name)
    super(name)
    // metoder der sammenligner forskellige crud for forskellige persone og derved laver matches, og giver acces 
    // til en message function

}

// When people like some one, the persones unique user ID will be addet to the array of people they like in the intrest class
function like() {
// Laver konstanter for fiktive like og disslike knapper
Let likeBtn = document.getElementById("likeBtn");
Let disslikeBtn = document.getElementById("disslikeBtn");
// Laver en event listner der skal gøre noget alt efter om man liker eller dissliker
likeBtn.addEventListener("click",()=>{
//tilføj likede brugers uniqueId til et array 
    likedPersons.push(userOnScreen.uniqueUserID) //lav en variabel der gør at den person der er på dislayet er = userOnScreen
})
};
*/
