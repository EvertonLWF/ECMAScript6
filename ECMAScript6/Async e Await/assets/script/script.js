function requisitar() {
	const url = 'https://alunos.b7web.com.br/api/ping'; 
	const params = {
		method: 'POST',
		body: JSON.stringify({
			nome: 'Bonieky',
			idade:99
		})
	}
	fetch(url, params)
		.then((r)=>r.json())
		.then((json)=>{
			console.log(json['resultado']);
		});
	console.log("Alguma coisa");
}



async function requisitar2() {
	const url = 'https://alunos.b7web.com.br/api/ping'; 
	const params = {
		method: 'POST',
		body: JSON.stringify({
			nome: 'Bonieky',
			idade:99
		})
	}
	const resp = await fetch(url,params);
	const json = await resp.json();

	console.log(json['resultado']);
	console.log("Alguma coisa");

}


requisitar();
requisitar2();