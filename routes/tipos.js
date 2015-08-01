var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tipos');
});

router.post('/tipos/cadastrar', function(req, res, next){
	Tipo.cadastrar(function(row,err){
		if(err){
			res.send("erro ao cadastrar :"+err.message,500);
		}
		else{
			res.redirect("/tipos/listar");
		}
	});
});

module.exports = router;