var azure = require('azure-storage');
var queueSvc = azure.createQueueService();

queueSvc.createMessage('user-send', "Hello world!", function(error, results, response){
	if(!error){
		console.log(error);
	}
	console.log('sth happend');
});
