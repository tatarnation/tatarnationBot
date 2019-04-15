var mysql = require("mysql");
module.exports = function(){
  var mysqlClient = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "tatarnationapp",
    multipleStatements: "true",
    MAX_EXECUTION_TIME: 2000
  });
  /*mysqlClient.connect(err=>{
  });*/
  return mysqlClient;
}
