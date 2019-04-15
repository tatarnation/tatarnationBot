var mysqlClient = require("./connection.js");

module.exports = async function(connection){
    let Result;
    connection.query("SELECT * FROM globals",(err,result,fields)=>{
        console.log("Лягушка");
        Result = result[0].variable;
        console.log(Result);
    });
    return Result;
}