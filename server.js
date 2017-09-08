var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "itsolutions1.cod1flcs3ab6.us-east-2.rds.amazonaws.com",
  user: "esteban",
  password: "esteban",
  database: "gotitsolutions"

});



// mysql end
app.get('/', function(request, response) {
  //response.render('pages/index');
  response.send('hello');
});


app.post('/api/login', function (req, res) {
        if (!req.body.usuario || !req.body.password) {
            let tmp = '* Email y Contraseña es requerido ';
            res.writeHead(400, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write('<html><head><title>400</title><body>400: Bad Request</body> <br/> ' + tmp + '</head>');
            res.end();
        } else {
//dasaddasdasdsdsdsadsads

con.connect(function(err) {
  if (err) throw err;
  con.query(`
    select * from usuario_cia
    

    `, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});


          //dsaadsadsdsadsadsa
        //		res.send("hola");
        }
    });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
