
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


// Observers supertype
interface Subscriber{
    update(): unknown;
}

class Publisher{
    // Variables/Fields
        // State
            news: object;
        // List of subscribers/observers
        subscribers: Array<Subscriber>

    // Operations
        // - Mechanism for subscribing observers
            subscribe(newsubscriber: Subscriber){
                this.subscribers.push(newsubscriber)
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
             for(let subscriber in this.subscribers  ){
                 subscriber.update();
             }
            }
        //  - Triggering the notification process
        //  - Causing the change in state
}