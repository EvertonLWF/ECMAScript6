function AddEndereco(end) {
	const newEnd = {
		cidade:end.cidade,
		estado:end.estado,
		pais:end.pais
	};
	console.log(newEnd.cidade+" , "+newEnd.estado+" , "+newEnd.pais);
}

AddEndereco({cidade:'sls',estado:'rs',pais:'br'});


//1 usar variavel em string na nova forma
//2 desconstruir objeto
//3 usar objeto literal


function AddEndereco(end) {
	//1
	const{cidade,estado,pais} = end;
	//2
	const newEnd = {cidade,estado,pais};
	//3
	console.log(` ${newEnd.cidade} ${newEnd.estado} ${newEnd.pais}`);
}

AddEndereco({cidade:'sls',estado:'rs',pais:'br'});