var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {    
    console.log('Exemplo de evento');
}

eventEmitter.on('evento', myEventHandler);  
eventEmitter.emit('evento');