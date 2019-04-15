
module.exports = function(message,ureq){
    let CommandsArray = ['by','exp'];
    let find = false;
    var command;
    CommandsArray.forEach(Command=>{
        if(find) return;
        if(Command == ureq[0]){
            try{
                command = require(`../commands/${Command}.js`);    
            }catch(err){
                command = require(`../commands/return.js`); 
            }
            find = true;
            return;
        }
    });
    if(command) return command.function;
    if(!command) return function(){
        return;
    }
};


