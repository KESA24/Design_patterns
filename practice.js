var User = /** @class */ (function () {
    function User(usernameArg, nameArg) {
        // The singleton condition   
        if (User.currentUser instanceof User) {
            return User.currentUser;
        }
        this.username = usernameArg;
        this.name = nameArg;
        User.currentUser = this;
    }
    User.prototype.getUser = function () {
        return User.currentUser;
    };
    return User;
}());
var user1 = new User("Kesa11", "Kesa");
user1.getUser();
console.log(user1.getUser());
var user2 = new User("glo456", "gloria");
user2.getUser();
console.log(user2);
