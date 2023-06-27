const mysql = require('mysql');
const url = require('url');

const dbUrl = url.parse(process.env.CLEARDB_DATABASE_URL);
const [dbUser, dbPassword] = dbUrl.auth.split(':');

const connection = mysql.createConnection({
    host: dbUrl.hostName,
    port: dbUrl.port,
    user: dbUser,
    password: dbPassword,
    database: dbUrl.pathname.substr(1)
})

connection.connect((error) => {
    if(error) {
        console.error('Error connecting to ClearDB: ', error);
        return;
    }
    console.log('Connected to ClearDB')
});

