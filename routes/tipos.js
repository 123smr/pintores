var express = require('express');
var router = express.Router();
require("../models/tipo")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tipos');
});

router.post('/cadastrar', function(req, res, next){

	Tipo.cadastrar(req.param("tipo"),function(row,err){
		if(err){
			res.send("erro ao cadastrar :"+err.message,500);
		}
		else{
			res.redirect("/tipos/listar");
		}
	});
});

router.get('/listar', function(req,res,next){
	Tipo.listar(function(rows,err){
		if(err){
			res.send("erro ao buscar :"+err.message,500);
		}
		else{
			res.render('lista_de_tipos',{registros:rows});
		}
	});
});

router.get('/excluir', function(req,res,next){
	Tipo.excluir(req.param("id"),function(row,err){
		if(err){
			res.send("erro ao cadastrar :"+err.message,500);
		}
		else{
			res.redirect("/tipos/listar");
		}
	});
});

router.get('/alterar', function(req,res,next){
	Tipo.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar Id"+err.message,500);
		}
		else{
			res.render('alterar_tipo',{tipo:rows[0]});
		}

	});
});
router.post('/update', function(req,res,next){
	tipo={
		id:req.param("id"),
		tipo:req.param("tipo")
	}
	Tipo.alterar(tipo,function(rows,err){
		if(err){
			res.send("erro ao atualizar"+err.message,500);
		}
		else{
			res.redirect("/tipos/listar");
		}
	});
});








module.exports = router;