let numeros = [1,2,3,4];
let outros = numeros;
outros.push(5,6,7,8);

let numeros = [1,2,3,4];
let outros = [...numeros,5,6,7,8];

console.log(outros);


let info  = {
	nome: 'everton',
	sobrenome: 'feijo'
};

let novaInfo = {
	...info,
	cidade: 'Sls'
};

console.log(novaInfo);

function addInfo(info) {
	let novaInfo = {
		...info,
		status:0
		token:'nvidbvdvvknmlkmlasv'
	}
	return novaInfo;
}

console.log(addInfo({nome:'everton',senha:'12345'}));