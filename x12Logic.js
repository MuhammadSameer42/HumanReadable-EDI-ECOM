// const fs = require("fs");
// const path = require("path");
// const file = "x12Data/78978932442.txt";
//     try {
//         var data = fs.readFileSync('78978932442.txt', 'utf8');
//         // jsonMaker.makeJson();
//         let rawdata = fs.readFileSync('stest.json');
//         let jsonData = JSON.parse(rawdata);
//         var data_holder = "";
//         var sub_data_holder = "";
//         var index = 0;
//         var segmentdelimiter = data.charAt(105);
//         var componentdelimeter =  data.charAt(104);
//         var fielddelimeter =  data.charAt(103);
//         var DataArray = [];
//         var SubDataArray = [];
//         var FinalArray = [];
//         for (var i = 0; i < data.length; i++) {
//            data_holder = data_holder + data.charAt(i);
//            if (segmentdelimiter ===  data.charAt(i)){
//                 DataArray.push(data_holder.replace("\n",""));
//               data_holder = "";
//            } 
//         }
//         for (let j = 0; j < DataArray.length; ++j) {
//             for(let k = 0; k <= DataArray[j].length; k++){
//                 sub_data_holder = sub_data_holder + DataArray[j].charAt(k);
//                 if (segmentdelimiter === DataArray[j].charAt(k)){
//                     SubDataArray.push(sub_data_holder.slice(0,sub_data_holder.length-1));
//                     SubDataArray.push(segmentdelimiter);
//                     sub_data_holder = "";
//                     // console.log(sub_data_holder);
//                 }
//                 if (fielddelimeter === DataArray[j].charAt(k)){
//                     SubDataArray.push(sub_data_holder.slice(0,sub_data_holder.length-1));
//                     SubDataArray.push(fielddelimeter);
//                     sub_data_holder= "";
//                     // console.log(sub_data_holder);
//                 }
//             }
//             FinalArray.push(SubDataArray);
//             SubDataArray = [];
//             // console.log(j);
//         }
//         for(let i = 0;i<FinalArray.length;i++){
//             for(let j=0;j<FinalArray[i].length;j++){
//                 console.log(FinalArray[i][j]);
//             }
//         }
//     }

//    catch (err) {
//       console.error(err);
//       return;
//     };
var obj = { key: undefined };
console.log(obj["key2"] === undefined);