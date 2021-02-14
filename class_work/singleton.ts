
class User{
    public username: string;
    private password: string;
    protected email: string;
    protected phoneNumber: string;  
    public name: string;
    private static currentUser:any;
    constructor ( usernameArg: string, nameArg:string){  
        // The singleton condition   
        if(User.currentUser instanceof User){
            return User.currentUser;
        }
        
        this.username = usernameArg;
        this.name = nameArg;   
        User.currentUser = this
    }
    public getUser(){
        return User.currentUser
    }  

}

const user1 = new User("Kesa11", "Kesa");
user1.getUser();
console.log(user1.getUser());

const user2 = new User("glo456", "gloria");
user2.getUser();
console.log(user2);