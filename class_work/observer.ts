
// Observer Pattern
/*
    The two Parties
     - Observable
     - Observer
    
     Observer
      - Receiving updates
    
    Observable (Subject)
     - Main state
     - List of Observers
     - Mechanism for subscribing observers
     - Mechanism fo unsubscribing observers
     - Notifying observers
     - Triggering the notification process
     - Causing the change in state
    
*/

// Analogy: News publishing room and their readers.

// interface News {
//     headline: string,
//     body: string
// }

// Observers supertype
interface Subscriber{
    update(newState: object): unknown;
}

class Publisher{
    // Variables/Fields
        // State
        news: object;
        // List of subscribers/observers
        subscribers: Array<Subscriber>

    // Operations
        constructor(){
            this.news ={};
            this.subscribers = [];
        }
        // - Mechanism for subscribing observers
            subscribe(subscriber: Subscriber){
                const indexOfSubscriber = this.subscribers.indexOf(subscriber);
                if(indexOfSubscriber > -1){
                   return null
                }
                this.subscribers.push(subscriber)
            }
        //  - Mechanism fo unsubscribing observers
            unsubscribe(subscriber: Subscriber){
                const indexOfSubscriber = this.subscribers.indexOf(subscriber);
                if(indexOfSubscriber > -1){
                    this.subscribers.splice(indexOfSubscriber, 1)
                }
            }
        //  - Notifying observers
            notify(){
             for(let subscriber of this.subscribers  ){
                 subscriber.update(this.news);
             }
            }
        //  - Triggering the notification process
            startNotification(){
                this.notify();
            }
        //  - Causing the change in state
            publish(latestNews:object){
                this.news = latestNews;
                this.startNotification();
            }
}

// Create Observer (Subscriber)
class UrbanSubscriber implements Subscriber{
    receivedNews: object;
    name: string;

    constructor (nameArg:string){
        this.name = nameArg;
    }

    readInstantly(){
        console.log(this.receivedNews)
    }

    update(news:object){
            this.receivedNews = {...news, name:this.name};
            this.readInstantly();
    }
}

class localSubscriber extends UrbanSubscriber{}

// Create Publisher

let NewVision: Publisher = new Publisher();
let Bukedde: Publisher = new Publisher();

// Create Observers(Subscribers)
let stephen: Subscriber = new UrbanSubscriber("Stephen");
let sam: Subscriber = new UrbanSubscriber("Sam");
let mariat:Subscriber = new UrbanSubscriber("Mariat");
let unsecgen:Subscriber = new UrbanSubscriber("UNSecGen");

let katumba: Subscriber = new localSubscriber("katumba");




// Subscription
NewVision.subscribe(stephen);
NewVision.subscribe(sam);
NewVision.subscribe(mariat);
NewVision.subscribe(unsecgen);

Bukedde.subscribe(katumba);


// Unsubscribe
NewVision.unsubscribe(stephen);

// Publishing
NewVision.publish({
    headline: "New UN Secretary General!",
    body: "Patricia Rhoda Nekesa becomes the new UN secretary General"
})

Bukedde.publish({
    headline: "Esannyyuuuuuuu...........",
    body: "Patricia Rhoda Nekesa becomes the new UN secretary General"
})