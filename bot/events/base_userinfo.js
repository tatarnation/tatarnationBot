module.exports = async function(message,ureq,connection){
    let user = "ddd";
    await connection.query(`SELECT * FROM users WHERE id_user=${message.author.id}`,(err,result)=>{
        user = result;
        console.log(user);
        return user;
    });
    return user;
}