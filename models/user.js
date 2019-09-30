

var user = function(name, email, age){
    this.name = name;
    this.email = email;
    this.age = age
}


user.prototype.name = "";
user.prototype.email = "";
user.prototype.age = 0;


module.exports = user;