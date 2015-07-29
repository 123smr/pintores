require("../db/connection")
Orcamento=function(nome,telefone,endereco,email,orcamento){
	//atributos publicos//
	this.nome=nome;
	this.telefone=telefone;
	this.endereco=endereco;
	this.email=email;
	this.orcamento=orcamento;

	//metodo publico//
	this.incluir=function(callback){
		Orcamento.incluir(this,callback)
	}
}
//metodos estaticos//
Orcamento.incluir=function(orcamento,callback){
	var query="insert into orcamentos(nome,telefone,endereco,email,orcamento)values("+orcamento.nome+","+orcamento.telefone+","+orcamento.endereco+","+orcamento.email+","+orcamento.orcamento+")";
	console.log(".........................");
	console.log(query);
	console.log(".........................");


	db.cnn.exec(query,callback);
}
module.exports=Orcamento;