/*
    The two Parties
        - Observable
        - Observer
    
    Observer
        - receiving updates
    
    Observable (Subject)
        - Main state
        - List of observers
        - subscribing observers
        - unsubscribing observers
        - notifying observers
        - triggering the notification process
        - causing the change in state
        */ 

// Observers supertype
interface Subscriber{
    update(newState:object): unknown;  
}

class Publisher{
    // Fields
        // State
        news:object;
        // list of subscribers / Observers
        subscribers:Array<Subscriber>

    // Operations
        constructor(){
            this.news = {};
            this.subscribers = [];
        }
        // - subscribing observers
            subscribe(subscriber:Subscriber){
                const indexOfSubscriber = this.subscribers.indexOf(subscriber);
                if(indexOfSubscriber>-1){
                    return null
                }
                this.subscribers.push(subscriber)
            }
        // - unsubscribing observers
            unsubscribe(subscriber:Subscriber){                
                const indexOfSubscriber = this.subscribers.indexOf(subscriber);
                if(indexOfSubscriber>-1){
                    this.subscribers.splice(indexOfSubscriber,1)
                }
            }
        // - notifying observers
            notify(){
                for(let subscriber of this.subscribers){
                    // let subscriber:Subscriber = subscriberArg
                    subscriber.update(this.news);
                }    
            }
        // - triggering the notification process
            startNotification(){
                this.notify();
            }

        // - causing the change in state
        publish(latestNews:object){
            this.news = latestNews;
            this.startNotification();
        }
}



// Concrete Observer (Subscriber)
class UrbanSubscriber implements Subscriber{
    receivedNews: object;
    name: string;

    constructor(nameArg:string){
        this.name = nameArg;
    }

    readInstantly(){
        console.log(this.receivedNews);
        
    }
    update(news:object){
        this.receivedNews = {...news, name:this.name};
        this.readInstantly();
    }
}

class LocalSubscriber extends UrbanSubscriber{}

// Create Publisher: Objects
let NewVision: Publisher = new Publisher();
let Bukedde: Publisher = new Publisher();

// Create Observers (Subscrbers)
let stephen:Subscriber = new UrbanSubscriber("Stephen");
let sam:Subscriber = new UrbanSubscriber("Sam");
let mariat:Subscriber = new UrbanSubscriber("Mariat");
let katumba:Subscriber = new UrbanSubscriber("Katumba Oyee");

let jack: Subscriber = new LocalSubscriber("@senjack_");

// Subscription
NewVision.subscribe(stephen);
NewVision.subscribe(sam);
NewVision.subscribe(mariat);
NewVision.subscribe(katumba);

Bukedde.subscribe(jack);

// Unsubscribing
NewVision.unsubscribe(katumba);

// Publishing
NewVision.publish({
    headline: "Comedian turn Preacher!",
    body:"Comedian ....................."
})

Bukedde.publish({
    headline: "Efujjooooooooooooo!",
    body:"xxxxxx ....................."
})




