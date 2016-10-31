var promise = new Promise(function(resolve, reject){
	var success = true;

	if(success){
		resolve('promise fulfilled');
	}else{
		reject(new Error('promise rejected'));
	}
});