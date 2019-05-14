/**function add(...nro) {
	let i = nro.reduce(function(atual,x){
		return atual+x;
	});
	console.log(i);
}

function soma(atual,x){
	return atual+x;
}
**/



//outra forma
function add(...nro) {
	let i = nro.reduce((atual,x)=>{
		return atual+x;
	});
	console.log(i);
}

add(1,2,3,4);



