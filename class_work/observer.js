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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Publisher = /** @class */ (function () {
    // Operations
    function Publisher() {
        this.news = {};
        this.subscribers = [];
    }
    // - Mechanism for subscribing observers
    Publisher.prototype.subscribe = function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            return null;
        }
        this.subscribers.push(subscriber);
    };
    //  - Mechanism fo unsubscribing observers
    Publisher.prototype.unsubscribe = function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber > -1) {
            this.subscribers.splice(indexOfSubscriber, 1);
        }
    };
    //  - Notifying observers
    Publisher.prototype.notify = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this.news);
        }
    };
    //  - Triggering the notification process
    Publisher.prototype.startNotification = function () {
        this.notify();
    };
    //  - Causing the change in state
    Publisher.prototype.publish = function (latestNews) {
        this.news = latestNews;
        this.startNotification();
    };
    return Publisher;
}());
// Create Observer (Subscriber)
var UrbanSubscriber = /** @class */ (function () {
    function UrbanSubscriber(nameArg) {
        this.name = nameArg;
    }
    UrbanSubscriber.prototype.readInstantly = function () {
        console.log(this.receivedNews);
    };
    UrbanSubscriber.prototype.update = function (news) {
        this.receivedNews = __assign(__assign({}, news), { name: this.name });
        this.readInstantly();
    };
    return UrbanSubscriber;
}());
var localSubscriber = /** @class */ (function (_super) {
    __extends(localSubscriber, _super);
    function localSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return localSubscriber;
}(UrbanSubscriber));
// Create Publisher
var NewVision = new Publisher();
var Bukedde = new Publisher();
// Create Observers(Subscribers)
var stephen = new UrbanSubscriber("Stephen");
var sam = new UrbanSubscriber("Sam");
var mariat = new UrbanSubscriber("Mariat");
var unsecgen = new UrbanSubscriber("UNSecGen");
var katumba = new localSubscriber("katumba");
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
});
Bukedde.publish({
    headline: "Esannyyuuuuuuu...........",
    body: "Patricia Rhoda Nekesa becomes the new UN secretary General"
});
