const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '82.112.229.37',
    user: 'u388452600_minurtw',
    password: 'Minesh@12345',
    database: 'u388452600_minurtw',
});

export default connection;