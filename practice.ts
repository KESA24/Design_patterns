/* 
    Objectives:
       - Ensure that a class has only one/a single instance.
       - Provide a global access point to that instance.
*/

// Step 1: Create a class to turn into the singleton class.
class User{
    // Step 2: Specify all the class data members (variables).
    public username: string;
    private password: string;
    protected email: string;
    /*  
    Not recommended to make phonenumber datatype a number due to the instance of needing the country codes 
    and for exampele in number 07896546891 = 7896546891 but "0786453298" !== "786453298", 
    Also we are not going to use it for any calculations
    */
    protected phoneNumber: string;  
    public name: string;

    // Step 4: Create a static member of the class to store the very first instance of the class to be created.
    private static currentUser:any;

    // Step 3: Specify all the class operations or methods
    constructor ( usernameArg: string, nameArg:string){


        /* Step 6 also happens within the constructor: Check for whether there exists any created instance of the singleton class. 
        if there is an instance of the current class already created, then return that instance.
        */
        if(User.currentUser instanceof User){
            return User.currentUser;
        }

        this.username = usernameArg;
        this.name = nameArg;

        /* Step 5: Within and at the end of the constructor of the class, assign the static property (created in step 4)
         a value, which values is an instance of the class (singleton class)
        */
        User.currentUser = this

    }
    public getUser(){
        return User.currentUser
    }  

}

/*Step 7: Test for whether the singleton class works as expected. 
The class creates only one instance irrespective of how many times it is instantiated.
*/

const user1 = new User("Kesa11", "Kesa");
user1.getUser();
console.log(user1.getUser());

const user2 = new User("glo456", "gloria");
user2.getUser();
console.log(user2);