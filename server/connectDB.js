let mysql = require('mysql');

const dbConnectionInfo = {
    host: "localhost",
    user: "alex",
    password: "C@rs6791",
    database: "utbmSupport"
};

//create mysql connection pool
let dbconnection = mysql.createPool(
    dbConnectionInfo
);

// Attempt to catch disconnects
dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');

    connection.on('error', function (err) {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
        console.error(new Date(), 'MySQL close', err);
    });

});


module.exports = dbconnection;

