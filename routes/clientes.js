var express = require('express');
var router = express.Router();
require("../models/clientes");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clientes/clientes');
});

router.post('/cadastrar', function(request,response,next){
	var clientes=new Clientes();
	clientes.nome=request.param("nome");
	clientes.login=request.param("login");
	clientes.senha=request.param("senha");
	clientes.cadastrar(function(rows,err){
		if(err) response.send("erro ao atualizar :"+err.message,500);
		else response.redirect("/clientes/listar");
	});
});

router.get('/listar', function(req,res,next){
	Clientes.listar(function(rows,err){
		if(err){
			res.send("erro ao buscar :"+err.message,500);
		}
		else{
			res.render('clientes/lista_de_clientes',{registros:rows});
		}
	});
});

router.get('/alterar', function(req,res,next){
	Clientes.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar Id"+err.message,500);
		}
		else{
			res.render('clientes/alterar_cliente',{cliente:rows[0]});
		}

	});
});
router.post('/update', function(req,res,next){
	cliente={
		id:req.param("id"),
		nome:req.param("nome"),
		login:req.param("login"),
		senha:req.param("senha")
	}
	Clientes.alterar(cliente,function(rows,err){
		if(err){
			res.send("erro ao atualizar"+err.message,500);
		}
		else{
			res.redirect("/clientes/listar");
		}
	});
});

router.get('/excluir',function(req,res,next){
	Clientes.excluirPorId(parseInt(req.param('id')),function(rows,err){
		if(err){
			res.send("erro ao excluir :"+err.message,500);
		}
		else{
			res.redirect("/clientes/listar");
		}
	});
});


module.exports = router;
