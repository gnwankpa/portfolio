const EventEmitter = require('events');


class AsyncQueue extends EventEmitter {
    constructor() {
        super();
        this.queue = [];
        this.interval = 250;
        this.processing = false;
        this.on('interval', this.updateInterval);
      }
      updateInterval(newInterval) {
        this.interval = newInterval;
        clearInterval(this.intervalId);
        this.start();
      }
    
      enqueue(item) {
        this.queue.push(item);
        this.emit("enqueued", item);
      }
    
      peek() {
        return this.queue[0];
      }
    
      print() {
        console.log(this.queue);
      }
    
      getCurrentInterval() {
        return this.interval;
      }
    
    //   start() {
    //     if (!this.processing) {
    //       this.processing = true;
    //       setInterval(() => {
    //         const item = this.queue.shift();
    //         if (item) {
    //           this.emit("dequeued", item);
    //         } else {
    //           this.processing = false;
    //         }
    //       }, this.interval);
    //     }
    //   }

    //   start() {
    //     if (!this.processing) {
    //       this.processing = true;
    //       setInterval(() => {
    //         if(this.queue.length > 0) {
    //           const item = this.queue.shift();
    //           this.emit("dequeued", item);
    //         }
    //       }, this.interval);
    //     }
    //   }

      start() {
        if (!this.processing) {
          this.processing = true;
          this.intervalId = setInterval(() => {
            if(this.queue.length > 0) {
              const item = this.queue.shift();
              this.emit("dequeued", item);
            }
          }, this.interval);
        }
      }
    
      pause() {
        this.processing = false;
      }
}



  module.exports =  AsyncQueue