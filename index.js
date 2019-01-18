const azure = require('azure');
const mysql = require('mysql2');

const sqlConnection = mysql.createConnection(sqlAcc);

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

sqlConnection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});
