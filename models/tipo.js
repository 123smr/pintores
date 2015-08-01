require("../db/connection")
Tipo=function(id,tipo){
}
//metodo estatico//

Tipo.cadastrar=function(tipo,callback){
	var query="insert into tipos(tipo)values('"+tipo+"')";
	db.cnn.exec(query,callback);
}

Tipo.listar=function(callback){
	var query="select * from tipos";
	db.cnn.exec(query,callback);
}

Tipo.excluir=function(id,callback){
	var query="delete from tipos where id="+id;
	db.cnn.exec(query,callback);
}

Tipo.buscaPorId=function(id,callback){
	var query="select * from tipos where id="+id;
	db.cnn.exec(query,callback);
}
Tipo.alterar=function(tipo,callback){
	var query="update tipos set tipo = '"+tipo.tipo+"' where id="+tipo.id;
	db.cnn.exec(query,callback);
}