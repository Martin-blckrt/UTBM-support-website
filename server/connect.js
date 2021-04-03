let mysql = require('mysql');
const dbName = 'utbmSupport'

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'C@rs6791',
    database: 'utbmSupport'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
    const command = 'CREATE TABLE T_categorie (id INT AUTO_INCREMENT PRIMARY_KEY, name VARCHAR(30))';

    connection.query(command , function (err, result) {

        if (err){
            throw err;
        }

    console.log("Result: " + result);

  });
});
