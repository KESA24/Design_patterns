/*
    Objectives:
       - Ensure that a class has only one/a single instance.
       - Provide a global access point to that instance.
*/
// Step 1: Create a class to turn into the singleton class.
var User = /** @class */ (function () {
    // Step 3: Specify all the class operations or methods
    function User(usernameArg, nameArg) {
        /* Step 6 also happens within the constructor: Check for whether there exists any created instance of the singleton class.
        if there is an instance of the current class already created, then return that instance.
        */
        if (User.currentUser instanceof User) {
            return User.currentUser;
        }
        this.username = usernameArg;
        this.name = nameArg;
        /* Step 5: Within and at the end of the constructor of the class, assign the static property (created in step 4)
         a value, which values is an instance of the class (singleton class)
        */
        User.currentUser = this;
    }
    User.prototype.getUser = function () {
        return User.currentUser;
    };
    return User;
}());
/*Step 7: Test for whether the singleton class works as expected.
The class creates only one instance irrespective of how many times it is instantiated.
*/
var user1 = new User("Kesa11", "Kesa");
user1.getUser();
console.log(user1.getUser());
var user2 = new User("glo456", "gloria");
user2.getUser();
console.log(user2);
