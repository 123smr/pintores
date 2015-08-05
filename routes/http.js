var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/200', function(req, res, next) {
  res.send('retorno ok', 200);
});

/* GET home page. */
router.get('/201', function(req, res, next) {
  res.send('usado ao criar, API', 201);
});

/* status para retornar sem conteudo. */
router.get('/204', function(req, res, next) {
  res.send('', 204);
});

/* GET home page. */
router.get('/301', function(req, res, next) {
  res.redirect('http://google.com.br', 301);
});

/* GET home page. */
router.get('/400', function(req, res, next) {
  res.send('formato incorreto do seu post', 400);
});

/* GET home page. */
router.get('/401', function(req, res, next) {
  res.send('acesso nao autorizado', 401);
});

/* GET home page. */
router.get('/404', function(req, res, next) {
  res.send('pagina nao encontrada', 404);
});

/* GET home page. */
router.get('/408', function(req, res, next) {
  res.send('timeout demorano muito pra responder uma url', 408);
});

module.exports = router;
