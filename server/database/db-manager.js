let mysql = require('mysql');

class DBManager {
    constructor() {
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

        //let query = `INSERT INTO utbmSupport.T_categorie VALUES ('insertDB')`;

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