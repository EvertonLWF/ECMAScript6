class Animal{
	constructor(type,legs){
		this.type = type;
		this.legs = legs;
	}
	fala(som = 'em silencio'){
		return som;
	}
	get dados(){
		return `tipo = ${this.type} , Pernas = ${this.legs}`;
	}
}

export class Gato extends Animal{
	constructor(pernas, cor){
		super('cat', pernas);
		this.cor = cor;
	}

	fala(som = 'Miau!!!'){
		return som;
	}
	get Pelo(){
		return ` Pelo = ${this.cor}`;
	}
}
