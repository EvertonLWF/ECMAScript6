const info = {
	nome: "Everton",
	sobreNome: "Everton",
	email: "Everton@Feijo.com"
};


let {nome} = info;
console.log(nome);

let {sobreNome:SN} = info;
console.log(SN);

const nomes = ['aaa','bbb','ccc'];
let {1:segundoNome} = nomes;

console.log(segundoNome);

let[primeiro,segundo,terceiro] = nomes;

console.log(primeiro+segundo+terceiro);


const mat = {
	function somar(x,y) {
		return x+y;
	}
	function multiplicar(x,y) {
		return x*y;
	}
}
console.log(mat.somar(1,2));

let{somar,multiplicar} = mat;
console.log(somar(1,2));

