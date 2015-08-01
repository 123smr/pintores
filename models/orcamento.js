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
	this.alterar=function(callback){
		Orcamento.alterar(this,callback)
	}
}

//metodos estaticos//
Orcamento.incluir=function(orcamento,callback){
	var query="insert into orcamentos(nome,telefone,endereco,email,orcamento)values('"+orcamento.nome+"','"+orcamento.telefone+"','"+orcamento.endereco+"','"+orcamento.email+"','"+orcamento.orcamento+"')";
	db.cnn.exec(query,callback);
}
Orcamento.listar=function(callback){
	var query="select * from orcamentos";
	db.cnn.exec(query,callback);
}
Orcamento.excluirPorId=function(id,callback){
	var query="delete from orcamentos where id="+id;
	db.cnn.exec(query,callback);
}
Orcamento.alterar=function(orcamento,callback){
	var query="update orcamentos set nome='"+orcamento.nome+"',telefone='"+orcamento.telefone+"',endereco='"+orcamento.endereco+"',email='"+orcamento.email+"',orcamento='"+orcamento.orcamento+"' where id="+orcamento.id;
	db.cnn.exec(query,callback);
}
Orcamento.buscaPorId=function(id,callback){
	var query="select * from orcamentos where id="+id;
	db.cnn.exec(query,callback);
}



module.exports=Orcamento;