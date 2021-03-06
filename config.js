module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },

    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'password',
        database: process.env.MYSQL_DB || 'movie_db',

    },
}