const exec = require('child_process').exec;

var result = function(command: any, cb: any){
    var child = exec(command, function(err: string, stdout: string, stderr: string){
        if(err != null){
            return cb(new Error(err), null);
        }else if(typeof(stderr) != "string"){
            return cb(new Error(stderr), null);
        }else{
            return cb(null, stdout);
        }
    });
}

export default result;