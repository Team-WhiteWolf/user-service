const azure = require('azure');
const key = 'Endpoint=sb://servicequeues.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=AUNiefT6dHz3ivqbYvpteI+LlwvOWE2M0OleRycSXzs=';
const queueSvc = azure.createServiceBusService(key);

var message = {
	keks: 'test',
    body: 'Test message',
    customProperties: {
        testproperty: 'TestValue'
	}
};

queueSvc.sendQueueMessage('user-send', message, function(error){
    if(!error){
		console.log('Message sent!');
    }
});

queueSvc.receiveQueueMessage('user-send', function(error, receivedMessage){
    if(!error){
        // Message received and deleted
        console.log(receivedMessage.body);
    }
});
