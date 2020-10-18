
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
       }
       calculateAge() {
        var date_1 = new Date(this.birthday)
        var diff_ms = Date.now() - date_1.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }};
    


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
