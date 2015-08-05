require("../db/connection")

Clientes=function(nome,login,senha){
	this.nome=nome;
	this.login=login;
	this.senha=senha;

	//metodos publicos//
	this.cadastrar=function(callback){
		Clientes.cadastrar(this,callback);
	}
}


//metodos publicos//
Clientes.cadastrar=function(cliente,callback){
	var query="insert into clientes(nome,login,senha)values('"+cliente.nome+"','"+cliente.login+"','"+cliente.senha+"')";
	db.cnn.exec(query,callback);
}

Clientes.listar=function(callback){
	var query="select * from clientes";
	db.cnn.exec(query,callback);
}

Clientes.buscaPorId=function(id,callback){
	var query="select * from clientes where id="+id;
	db.cnn.exec(query,callback);
}

Clientes.alterar=function(cliente,callback){
	var query="update clientes set nome='"+cliente.nome+"',login='"+cliente.login+"',senha='"+cliente.senha+"' where id="+cliente.id;
	db.cnn.exec(query,callback);
}

Clientes.excluirPorId=function(id,callback){
	var query="delete from clientes where id="+id;
	db.cnn.exec(query,callback);
}



module.exports=Clientes;
