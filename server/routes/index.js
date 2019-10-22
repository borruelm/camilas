var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

var mySQLPool = mysql.createPool({
  host: '198.71.225.126',
  user: 'web',
  password: 'Code.404#',
  database: 'camilaweb'
});

router.use(cors());
router.use(bodyParser.json());

router.get('/message', function(req, res, next) {
  res.json('Welcome To Camilas API');
});



router.get('/getMake', (req, res) =>{
  let qry = "select * from make";
  mySQLPool.getConnection((error,conn) => {
    conn.query(qry, (err, result) => {
      conn.release();
      if(err) throw err;

      res.send(result);
    });
  });
});

router.post('/saveMake', (req, res) => {
  let qry = "Insert Into make (name, comments) Values ('" + req.body.name + "', '" + req.body.comments + "')";

  mySQLPool.getConnection((error,conn) => {
    conn.query(qry, (err, result) => {
      conn.release();
      if(err) res.send('error' + error);
      
      res.send('saved');
    });
  });
});

router.delete('/deleteMake', (req, res) =>{
  
  if(req.query.id === undefined){
    res.send("Not Deleted");
  }
  
  let qry = "DELETE FROM make WHERE id=" +req.query.id;

  mySQLPool.getConnection((error,conn) => {
    conn.query(qry, (err, result) => {
      conn.release();
      if(err) res.send('error' + error);

      res.send(result);
    });
  });
  

})


module.exports = router;