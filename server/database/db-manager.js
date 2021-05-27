let mysql = require('mysql');

class DBManager {
    constructor() {
        //TODO. Don't forget to change credentials!!!
        //if problems with priviliges : ALTER USER 'alex'@'localhost' IDENTIFIED WITH mysql_native_password BY 'C@rs6791'
        this.dbConnectionInfo = {
            host: "localhost",
            user: "alex",
            password: "C@rs6791",
            database: "utbmSupport"
        };
        this.dbconnection = mysql.createPool(this.dbConnectionInfo)
    }

    connect() {

        this.dbconnection.on('connection', function (connection) {

            console.log('DB Connection established');

            connection.on('error', function (err) {
                console.error(new Date(), 'MySQL error', err.code);
            });

            connection.on('close', function (err) {
                console.error(new Date(), 'MySQL close', err);
            });

        });

    }

    insertDataDB(query) {

        this.dbconnection.query(query, (err) => {

            if (err) console.error("error db =", err);

        });
    }

    getDataDB = (query) => new Promise((resolve) => {

        this.dbconnection.query(query, (err, results_db) => {

            if (err) console.error("error db =", err);

            resolve(results_db);

        });
    });

}

module.exports = DBManager;
