var express = require('express');
var router = express.Router();
require("../models/orcamento")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('orcamento', { title: 'orcamento' });
});
router.post('/cadastrar', function(req, res, next) {
	var orcamento=new Orcamento();
	orcamento.nome=req.param("nome");
	orcamento.telefone=req.param("telefone");
	orcamento.endereco=req.param("endereco");
	orcamento.email=req.param("email");
	orcamento.orcamento=req.param("descricao");
	orcamento.incluir(function(rows,err){
		if(err){
			res.send("erro ao atualizar :"+err.message,500);
		}
		else{
			res.redirect("/");
		}

	});
});

module.exports = router;

