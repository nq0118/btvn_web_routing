const express = require('express');
const rewrite = require('express-urlrewrite');

const router = express.Router();

//Viết lại url
router.use(rewrite(/^\/students\/(\w+)/, '/students?id=$1'));

//Định tuyến url
router.get('/students', (req, res) => {
  if (!req.query.id) {
    res.json({status: 'OK', data: [1, 2, 3]});
  } else {
    res.json({status: 'OK', data: [{masv: req.query.id}]});
  }
})

router.put('/students', (req, res) => {
  if (req.query.id) {
    res.json({status: 'OK', data: 'OK'});
  }
})

router.get('kh', (req, res) => {
  res.send('kh');
})

router.get('/*', (req, res) => {
  res.json({status: 'ERR', data: 'ACTION-NOT-FOUND'})
})

module.exports = router;