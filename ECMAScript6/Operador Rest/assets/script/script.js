function add(...num) {
	console.log(num);
}
add(5);

let nomes = ['everton','luis'];
let novos = addNomes(nomes, 'weber','feijo');
function addNomes(nomes, ...novos){
	let nomes = [...nomes,...novos];
	return nomes; 
}

console.log(novos);