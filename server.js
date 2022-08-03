const express = require('express')
const app = express()
const fs = require("fs");
const path = require("path");
const axios = require('axios');
const jsonMaker = require('./makeJson')
const port = process.env.PORT||3001

function dump_data(dump){
  fs.writeFileSync('dump_data.txt', dump);
}

app.use(express.json())
app.set("view engine", "ejs");
app.use('/style', express.static('style'));

//app.get('/makeJson', jsonMaker.makeJson);

//Home route

app.get("/", async (req, res) => {
    const file = "78978932442.txt";
    
    try {
      const config_first = {
        method: 'get',
        url: 'http://192.168.168.65:8080/getHumanReadableURL',
        headers: {
          "Content-Type": 'text/plain'
      },
    };
    let api_text = await axios(config_first);
      const config_last = {
        method: 'get',
        url: api_text.data,
        headers: {
          "Content-Type": 'text/plain'
      },
    }
  
    let apidata = await axios(config_last);
    let data_mess = JSON.stringify(apidata.data); 
    data = data_mess.replace(/(?:\\[rn])+/g, "");
    data =data.substring(1, data.length-1);
    dump_data(data);
        
		jsonMaker.makeJson();
        let rawdata = fs.readFileSync('get_json.json');
        let jsonData = JSON.parse(rawdata);
        var data_holder = "";
        var sub_data_holder = "";
        var index = 0;
        var segmentdelimiter = data.charAt(105);
        var componentdelimeter =  data.charAt(104);
        var fielddelimeter =  data.charAt(103);
        var DataArray = [];
        var SubDataArray = [];
        var FinalArray = [];
        for (var i = 0; i < data.length; i++) {
          data_holder = data_holder + data.charAt(i);
          if (segmentdelimiter ===  data.charAt(i)){
               DataArray.push(data_holder.replace("\n",""));
             data_holder = "";
          } 
       }
       for (let j = 0; j < DataArray.length; ++j) {
           for(let k = 0; k <= DataArray[j].length; k++){
               sub_data_holder = sub_data_holder + DataArray[j].charAt(k);
               if (segmentdelimiter === DataArray[j].charAt(k)){
                   SubDataArray.push(sub_data_holder.slice(0,sub_data_holder.length-1));
                   SubDataArray.push(segmentdelimiter);
                   sub_data_holder = "";
                   // console.log(sub_data_holder);
               }
               if (fielddelimeter === DataArray[j].charAt(k)){
                   SubDataArray.push(sub_data_holder.slice(0,sub_data_holder.length-1));
                   SubDataArray.push(fielddelimeter);
                   sub_data_holder= "";
                   // console.log(sub_data_holder);
               }
           }
           FinalArray.push(SubDataArray);
           SubDataArray = [];
          //  console.log(j);
       }
        res.render("base", { x12Data:{
          segment:segmentdelimiter,
          field:fielddelimeter,
          component:componentdelimeter,
          x12:FinalArray,
          raw:data,
          json:jsonData
        }});
        // fs.unlinkSync('.//stest.json');
    }
   catch (err) {
      console.error(err);
      return;
    }
  });
  
app.listen(port,()=>{console.log(`Listening to the server on http://localhost:${port}`)});