const makeJson = () =>{
    var exec = require('child_process').exec, child;
    child = exec('java -jar edireader-json-basic-5.6.2.jar --annotate=yes dump_data.txt get_json.json',
    function (error, stdout, stderr){
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if(error !== null){
      console.log('exec error: ' + error);
    }
    });
}
module.exports = {
    makeJson
  }
// makeJson();