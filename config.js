module.exports = {
    api:{
        port: process.env.API_PORT || 3001,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!' ,
    },
    mysql: {
        host: process.env.MYSQL_HOST || "127.0.0.1",
        port: process.env.MYSQL_PORT || "3306",
        user: process.env.USER || "root",
        password: process.env.MYSQL_PASSWORD || "IST-1234",
        database: process.env.MYSQL_DATABASE || "social"
      }
}
/*
mysql:{
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'PwrqhjMErI',
    password: process.env.MYSQL_PASSWORD || 'V1ozikDAOh',
    database: process.env.MYSQL_DB || 'PwrqhjMErI',
}
*/