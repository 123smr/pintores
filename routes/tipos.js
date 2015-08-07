var express = require('express');
var router = express.Router();
require("../models/tipo")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tipos/salvar_tipo',{
  	title:"incluir tipo",
  	url:"/tipos/cadastrar"
  });
});

router.get('/alterar', function(req,res,next){
	Tipo.buscaPorId(req.param("id"),function(rows,err){
		if(err){
			res.send("erro ao buscar Id"+err.message,500);
		}
		else{
			var tipo=rows[0];

			//================= outra forma de fazer um hash e mandar para view =================
			// mandarParaView={};
			// mandarParaView.title="alterar tipo";
			// mandarParaView.url="/tipos/update?id="+tipo.id;
			// mandarParaView.tipoDoMysql=tipo;
			// res.render('tipos/salvar_tipo',mandarParaView);

			//================= mais uma forma de fazer um hash e mandar para view =================
			res.render('tipos/salvar_tipo',{
			  	title:"alterar tipo",
			  	url:"/tipos/update?id="+tipo.id,
			  	tipoDoMysql:tipo
  			});
		}

	});
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
			res.render('tipos/lista_de_tipos',{registros:rows});
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