const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
  res.send({ data: 'Hola'});
});

module.exports = router;

//XHR-Strimg