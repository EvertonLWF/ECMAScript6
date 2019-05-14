function fazer() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('OK');
		},3000);
	});
	return promise;
}

fazer().then((resp)=>{
	console.log(`Resposta = ${resp}`);
})


