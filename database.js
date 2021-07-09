const mysql = require("mysql");

const config = require("../config");

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

// Conection!!
let connection;

function handleCon(){
  connection = mysql.createConnection(dbconf);
  connection.connect((err) => {
    if (err) {
      console.error('[db error]',err);
      setTimeout(handleCon,2000); // retry connection
    } else {
      console.log("DB_CONNECTED!!");
    }


  } );

  connection.on('error',err => {
    console.error('[db error]',err);

    if (err.code === 'PROTOCOL_CONNECTION_LOST'){
      handleCon();
    } else {
      throw err;
    }
  })
}

handleCon();

function getTable(table){
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM movie_db.${table}`, (err,data) => {
      if (err) return reject(err);
      else{
        //console.log(data);
        resolve(data);
      }
    })
  })
}

module.exports = {
  getTable,
};