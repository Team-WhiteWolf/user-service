var azure = require('azure-storage');
var queueSvc = azure.createQueueService("Endpoint=sb://servicequeues.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=AUNiefT6dHz3ivqbYvpteI+LlwvOWE2M0OleRycSXzs=");

queueSvc.createMessage('user-send', "Hello world!", function(error, results, response){
	if(!error){
		console.log(error);
	}
	console.log('sth happend');
});
