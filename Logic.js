var obj = {
  "interchanges": [
    {
      "ISA": "Interchange Control Header",
      "ISA_01_AuthorizationQualifier": "00",
      "ISA_02_AuthorizationInformation": "          ",
      "ISA_03_SecurityQualifier": "00",
      "ISA_04_SecurityInformation": "          ",
      "ISA_05_SenderQualifier": "ZZ",
      "ISA_06_SenderId": "TST1MILLSFLEET2",
      "ISA_07_ReceiverQualifier": "ZZ",
      "ISA_08_ReceiverId": "BELLLABST      ",
      "ISA_09_Date": "210525",
      "ISA_10_Time": "1030",
      "ISA_11_StandardsId": "U",
      "ISA_12_Version": "00401",
      "ISA_13_InterchangeControlNumber": "100000020",
      "ISA_14_AcknowledgmentRequested": "0",
      "ISA_15_TestIndicator": "P",
      "functional_groups": [
        {
          "GS": "Functional Group Header",
          "GS_01_FunctionalIdentifierCode": "PO",
          "GS_02_ApplicationSenderCode": "TST1MILLSFLEET2",
          "GS_03_ApplicationReceiverCode": "063518831",
          "GS_04_Date": "20210525",
          "GS_05_Time": "1030",
          "GS_06_GroupControlNumber": "1020",
          "GS_07_ResponsibleAgencyCode": "X",
          "GS_08_Version": "004010",
          "transactions": [
            {
              "850": "Purchase Order",
              "ST": "Transaction Set Header",
              "ST_01_TransactionSetIdentifierCode": "850",
              "ST_02_TransactionSetControlNumber": "1020",
              "segments": [
                {
                  "BEG": "Beginning Segment for Purchase Order",
                  "BEG_01_description": "Transaction Set Purpose Code",
                  "BEG_01": "00",
                  "BEG_01_code_00": "Original",
                  "BEG_02_description": "Purchase Order Type Code",
                  "BEG_02": "SA",
                  "BEG_02_code_SA": "Stand-alone Order",
                  "BEG_03_description": "Purchase Order Number",
                  "BEG_03": "101101",
                  "BEG_05_description": "Date",
                  "BEG_05": "20210525"
                },
                {
                  "REF": "Reference Information",
                  "REF_01_description": "Reference Identification Qualifier",
                  "REF_01": "IA",
                  "REF_01_code_IA": "Internal Vendor Number",
                  "REF_02_description": "Reference Identification",
                  "REF_02": "2127"
                },
                {
                  "ITD": "Terms of Sale/Deferred Terms of Sale",
                  "ITD_01_description": "Terms Type Code",
                  "ITD_01": "01",
                  "ITD_01_code_01": "Basic",
                  "ITD_02_description": "Terms Basis Date Code",
                  "ITD_02": "3",
                  "ITD_02_code_3": "Invoice Date",
                  "ITD_12_description": "Description",
                  "ITD_12": "1% 30 DAYS"
                },
                {
                  "DTM": "Date/Time Reference",
                  "DTM_01_description": "Date/Time Qualifier",
                  "DTM_01": "001",
                  "DTM_01_code_001": "Cancel After",
                  "DTM_02_description": "Date",
                  "DTM_02": "20210604"
                },
                {
                  "DTM": "Date/Time Reference",
                  "DTM_01_description": "Date/Time Qualifier",
                  "DTM_01": "074",
                  "DTM_01_code_074": "Requested for Delivery (Prior to and Including)",
                  "DTM_02_description": "Date",
                  "DTM_02": "20210530"
                },
                {
                  "TD5": "Carrier Details (Routing Sequence/Transit Time)",
                  "TD5_01_description": "Routing Sequence Code",
                  "TD5_01": "B",
                  "TD5_01_code_B": "Origin/Delivery Carrier (Any Mode)",
                  "TD5_05_description": "Routing",
                  "TD5_05": "PREPAID"
                },
                {
                  "N1-4000_loop": [
                    {
                      "N1": "Party Identification",
                      "N1_01_description": "Entity Identifier Code",
                      "N1_01": "ST",
                      "N1_01_code_ST": "Ship To",
                      "N1_02_description": "Name",
                      "N1_02": "Chippewa Falls (DC)",
                      "N1_03_description": "Identification Code Qualifier",
                      "N1_03": "92",
                      "N1_03_code_92": "Assigned by Buyer or Buyer's Agent",
                      "N1_04_description": "Identification Code",
                      "N1_04": "98030"
                    },
                    {
                      "N3": "Party Location",
                      "N3_01_description": "Address Information",
                      "N3_01": "2900 Lakeview Drive"
                    },
                    {
                      "N4": "Geographic Location",
                      "N4_01_description": "City Name",
                      "N4_01": "Chippewa Falls",
                      "N4_02_description": "State or Province Code",
                      "N4_02": "WI",
                      "N4_03_description": "Postal Code",
                      "N4_03": "54729"
                    }
                  ]
                },
                {
                  "N1-4000_loop": [
                    {
                      "N1": "Party Identification",
                      "N1_01_description": "Entity Identifier Code",
                      "N1_01": "BT",
                      "N1_01_code_BT": "Bill-to-Party",
                      "N1_02_description": "Name",
                      "N1_02": "FLEET FARM WHOLESALE SUPPLY CO. LLC"
                    },
                    {
                      "N3": "Party Location",
                      "N3_01_description": "Address Information",
                      "N3_01": "2401 S. Memorial Dr."
                    },
                    {
                      "N4": "Geographic Location",
                      "N4_01_description": "City Name",
                      "N4_01": "Appleton",
                      "N4_02_description": "State or Province Code",
                      "N4_02": "WI",
                      "N4_03_description": "Postal Code",
                      "N4_03": "54915"
                    }
                  ]
                },
                {
                  "PO1-8000_loop": [
                    {
                      "PO1": "Baseline Item Data",
                      "PO1_01_description": "Assigned Identification",
                      "PO1_01": "1",
                      "PO1_02_description": "Quantity",
                      "PO1_02": "10",
                      "PO1_03_description": "Unit or Basis for Measurement Code",
                      "PO1_03": "CA",
                      "PO1_03_code_CA": "Case",
                      "PO1_04_description": "Unit Price",
                      "PO1_04": "71.86",
                      "PO1_06_description": "Product/Service ID Qualifier",
                      "PO1_06": "UP",
                      "PO1_06_code_UP": "GTIN UCC - 12 Digit Data Structure",
                      "PO1_07_description": "Product/Service ID",
                      "PO1_07": "048745220222",
                      "PO1_08_description": "Product/Service ID Qualifier",
                      "PO1_08": "VN",
                      "PO1_08_code_VN": "Vendor's (Seller's) Item Number",
                      "PO1_09_description": "Product/Service ID",
                      "PO1_09": "10048745220229"
                    },
                    {
                      "PID-8150_loop": [
                        {
                          "PID": "Product/Item Description",
                          "PID_01_description": "Item Description Type",
                          "PID_01": "F",
                          "PID_01_code_F": "Free-form",
                          "PID_05_description": "Description",
                          "PID_05": "Tomcat w/Bromethalin Place Pacs 22 x 3 oz Pail   4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "PO1-8000_loop": [
                    {
                      "PO1": "Baseline Item Data",
                      "PO1_01_description": "Assigned Identification",
                      "PO1_01": "2",
                      "PO1_02_description": "Quantity",
                      "PO1_02": "25",
                      "PO1_03_description": "Unit or Basis for Measurement Code",
                      "PO1_03": "CA",
                      "PO1_03_code_CA": "Case",
                      "PO1_04_description": "Unit Price",
                      "PO1_04": "32.64",
                      "PO1_06_description": "Product/Service ID Qualifier",
                      "PO1_06": "UP",
                      "PO1_06_code_UP": "GTIN UCC - 12 Digit Data Structure",
                      "PO1_07_description": "Product/Service ID",
                      "PO1_07": "0 8745323459",
                      "PO1_08_description": "Product/Service ID Qualifier",
                      "PO1_08": "VN",
                      "PO1_08_code_VN": "Vendor's (Seller's) Item Number",
                      "PO1_09_description": "Product/Service ID",
                      "PO1_09": "32345"
                    },
                    {
                      "PID-8150_loop": [
                        {
                          "PID": "Product/Item Description",
                          "PID_01_description": "Item Description Type",
                          "PID_01": "F",
                          "PID_01_code_F": "Free-form",
                          "PID_05_description": "Description",
                          "PID_05": "Tomcat R&M Bait Pellet Pail 10 lb.     2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "PO1-8000_loop": [
                    {
                      "PO1": "Baseline Item Data",
                      "PO1_01_description": "Assigned Identification",
                      "PO1_01": "3",
                      "PO1_02_description": "Quantity",
                      "PO1_02": "30",
                      "PO1_03_description": "Unit or Basis for Measurement Code",
                      "PO1_03": "CA",
                      "PO1_03_code_CA": "Case",
                      "PO1_04_description": "Unit Price",
                      "PO1_04": "72.64",
                      "PO1_06_description": "Product/Service ID Qualifier",
                      "PO1_06": "UP",
                      "PO1_06_code_UP": "GTIN UCC - 12 Digit Data Structure",
                      "PO1_07_description": "Product/Service ID",
                      "PO1_07": "048745229201",
                      "PO1_08_description": "Product/Service ID Qualifier",
                      "PO1_08": "VN",
                      "PO1_08_code_VN": "Vendor's (Seller's) Item Number",
                      "PO1_09_description": "Product/Service ID",
                      "PO1_09": "22920"
                    },
                    {
                      "PID-8150_loop": [
                        {
                          "PID": "Product/Item Description",
                          "PID_01_description": "Item Description Type",
                          "PID_01": "F",
                          "PID_01_code_F": "Free-form",
                          "PID_05_description": "Description",
                          "PID_05": "Tomcat Bromethalin Meal Bait Jug 5 lb.       4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "PO1-8000_loop": [
                    {
                      "PO1": "Baseline Item Data",
                      "PO1_01_description": "Assigned Identification",
                      "PO1_01": "4",
                      "PO1_02_description": "Quantity",
                      "PO1_02": "40",
                      "PO1_03_description": "Unit or Basis for Measurement Code",
                      "PO1_03": "CA",
                      "PO1_03_code_CA": "Case",
                      "PO1_04_description": "Unit Price",
                      "PO1_04": "32.16",
                      "PO1_06_description": "Product/Service ID Qualifier",
                      "PO1_06": "UP",
                      "PO1_06_code_UP": "GTIN UCC - 12 Digit Data Structure",
                      "PO1_07_description": "Product/Service ID",
                      "PO1_07": "048745227788",
                      "PO1_08_description": "Product/Service ID Qualifier",
                      "PO1_08": "VN",
                      "PO1_08_code_VN": "Vendor's (Seller's) Item Number",
                      "PO1_09_description": "Product/Service ID",
                      "PO1_09": "22778"
                    },
                    {
                      "PID-8150_loop": [
                        {
                          "PID": "Product/Item Description",
                          "PID_01_description": "Item Description Type",
                          "PID_01": "F",
                          "PID_01_code_F": "Free-form",
                          "PID_05_description": "Description",
                          "PID_05": "Tomcat Mouse Killer T1 Refillable 8 x 1 oz   8"
                        }
                      ]
                    }
                  ]
                },
                {
                  "CTT-9000_loop": [
                    {
                      "CTT": "Transaction Totals",
                      "CTT_01_description": "Number of Line Items",
                      "CTT_01": "4",
                      "CTT_02_description": "Hash Total",
                      "CTT_02": "105"
                    },
                    {
                      "AMT": "Monetary Amount Information",
                      "AMT_01_description": "Amount Qualifier Code",
                      "AMT_01": "B6",
                      "AMT_01_code_B6": "Allowed - Actual",
                      "AMT_02_description": "Monetary Amount",
                      "AMT_02": "5000.2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

String.prototype.toProperCase = function () {
return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
var gs_key = "";
var segment_key = "";
var segment_key_2 = "$$$";
var counter = 0;
var deep_check = 0;
var JumpForChild = "false";
var align_main_length = 0;
var align_holder = "";;
var counter_for_2_3 = 0;
var temp_align_holder = [];
for (let interchanges in obj) { 
// console.log(main.toProperCase());


//**************** Start of Interchange ************
for(let interchange_idx in obj[interchanges]){
  
   for (let interchange_keys in obj[interchanges][interchange_idx]){
    if (counter === 0){
      segment_key = interchange_keys;
      counter++;
    }
   else if(counter!= 0){
      segment_key_2 = interchange_keys.split("_")[0];
    }
    if(segment_key != segment_key_2 && segment_key_2 != "$$$"){
      
  //**************** Level Two ****************
      for (let LevelTwo_idx in obj[interchanges][interchange_idx][interchange_keys])
          {
      counter = 0;
      segment_key_2 = "$$$";
          for (let LevelTwo_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx]){
            if (counter === 0){
              segment_key = LevelTwo_keys;
              counter++;
            }
           else if(counter!= 0){
              // console.log("Checking level two");
              segment_key_2 = LevelTwo_keys.split("_")[0];
            }
            
            if(segment_key != segment_key_2 && segment_key_2 != "$$$")
            { 
                  
                  //**************** Level Three ****************
                  for (let LevelThree_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys])
                      {
            counter = 0;
            segment_key_2 = "$$$";
                      for (let LevelThree_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx]){
                        if (counter === 0){
                          console.log(LevelThree_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys]);
                          counter++;
                        }
                      else if (counter === 1){
                          segment_key = LevelThree_keys;
                          counter++;
                        }
                       else if(counter!= 1 && counter!= 0){
                          segment_key_2 = LevelThree_keys.split("_")[0];
                        }
                        
                      if(segment_key != segment_key_2 && segment_key_2 != "$$$"){
                          // counter = 0;
                      
                          //**************** Level Four ****************
                          for (let LevelFour_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys])
                              {
                                 counter = 0;
                                 segment_key_2 = "$$$";
                                 JumpForChild = "false";
                                 for (let LevelFour_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx]){
                                   if (counter === 0){
                                      segment_key = LevelFour_keys;
                                      if (LevelFour_keys.match(/^.*_loop$/)) {
                                          JumpForChild = "true";
                                      }
                                      counter++;
                                    }
                                    else if(counter!= 0){
                                       segment_key_2 = LevelFour_keys.split("_")[0];
                                   }
                                   
                                   if((segment_key != segment_key_2 && segment_key_2 != "$$$") || JumpForChild == "true"){
                                    
                  //**************** Level Five ****************
                  for (let LevelFive_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys])
                    {
                       counter = 0;
                       segment_key_2 = "$$$";
                       JumpForChild = "false";
                    for (let LevelFive_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx]){
                      if (counter === 0){
                      segment_key = LevelFive_keys;
                      counter++;
                      if (LevelFive_keys.match(/^.*_loop$/)) {
                        JumpForChild = "true";
                    }
                      }
                     else if(counter!= 0){
                      segment_key_2 = LevelFive_keys.split("_")[0];
                      }
                      
                      if(segment_key != segment_key_2 && segment_key_2 != "$$$" || JumpForChild == "true"  ){
                        
                        //**************** Level Six ****************
                        for (let LevelSix_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys])
                          {
                             counter = 0;
                             segment_key_2 = "$$$";
                             JumpForChild = "false";
                          for (let LevelSix_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx]){
                            if (counter === 0){
                            segment_key = LevelSix_keys;
                            counter++;
                            if (LevelSix_keys.match(/^.*_loop$/)) {
                              JumpForChild = "true";
                          }
                            }
                           else if(counter!= 0){
                            segment_key_2 = LevelSix_keys.split("_")[0];
                            }
                            
                            if(segment_key != segment_key_2 && segment_key_2 != "$$$" || JumpForChild == "true" ){
                              
                              //**************** Level Seven ****************
                              for (let LevelSeven_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys])
                                {
                                   counter = 0;
                                   segment_key_2 = "$$$";
                                   JumpForChild = "false";
                                for (let LevelSeven_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx]){
                                  if (counter === 0){
                                  segment_key = LevelSeven_keys;
                                  counter++;
                                  if (LevelSeven_keys.match(/^.*_loop$/)) {
                                    JumpForChild = "true";
                                }
                                  }
                                 else if(counter!= 0){
                                  segment_key_2 = LevelSeven_keys.split("_")[0];
                                  }
                                  
                                  if(segment_key != segment_key_2 && segment_key_2 != "$$$" || JumpForChild == "true"){
                                  
                                    //**************** Level Eight ****************
                                    for (let LevelEight_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys])
                                      {
                                         counter = 0;
                                         segment_key_2 = "$$$";
                                         JumpForChild = "false";
                                      for (let LevelEight_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx]){
                                        if (counter === 0){
                                        segment_key = LevelEight_keys;
                                        counter++;
                                        if (LevelEight_keys.match(/^.*_loop$/)) {
                                          JumpForChild = "true";
                                      }
                                        }
                                       else if(counter!= 0){
                                        segment_key_2 = LevelEight_keys.split("_")[0];
                                        }
                                        
                                        if(segment_key != segment_key_2 && segment_key_2 != "$$$" || JumpForChild == "true"){
                                        
                                          //************ Level Nine ********************
                                          for (let LevelNine_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys])
                                            {
                                               counter = 0;
                                               segment_key_2 = "$$$";
                                               JumpForChild = "false";
                                            for (let LevelNine_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx]){
                                              if (counter === 0){
                                              segment_key = LevelNine_keys;
                                              counter++;
                                              if (LevelNine_keys.match(/^.*_loop$/)) {
                                                JumpForChild = "true";
                                            }
                                              }
                                             else if(counter!= 0){
                                              segment_key_2 = LevelNine_keys.split("_")[0];
                                              }
                                              
                                              if(segment_key != segment_key_2 && segment_key_2 != "$$$"  || JumpForChild == "true"){
                                              
                                                 //**************** Level Ten ****************
                                                for (let LevelTen_idx in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys])
                                                  {
                                                     counter = 0;
                                                     JumpForChild = "false";
                                                     segment_key_2 = "$$$";
                                                  for (let LevelTen_keys in obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx]){
                                                    if (counter === 0){
                                        
                                                    segment_key = LevelTen_keys;
                                                    counter++;
                                                    if (LevelTen_keys.match(/^.*_loop$/)) {
                                                      JumpForChild = "true";
                                                  }
                                                    }
                                                   else if(counter!= 0){
                                                    segment_key_2 = LevelTen_keys.split("_")[0];
                                                    }
                                                    
                                                    if(segment_key != segment_key_2 && segment_key_2 != "$$$" || JumpForChild == "true"){
                                                      // var gs_key = interchange_keys;
                                                    }
                                                    else if(LevelTen_keys === segment_key){
                                                      console.log(LevelTen_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys]);
                                                    }
                                                    else{           
                                                      if(align_holder != LevelTen_keys.slice(0,align_main_length+3) ){
                                                        align_holder = LevelTen_keys.slice(0,align_main_length+3); 
                                                      }
                                                      if(LevelTen_keys.slice(0,align_main_length+3) === align_holder){ 
                                                        temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys]);
                                                        counter_for_2_3++;
                                                        if(counter_for_2_3===2){
                                                          if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys]]=== undefined){
                                                            
                                                              console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                                                              temp_align_holder = [];
                                                              counter_for_2_3 = 0;
                                                              align_holder = "$$$";
                                                          }
                                                          
                                                          
                                                          else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys]] != undefined){
                                                            
                                                              temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys[LevelTen_idx][LevelTen_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys][LevelTen_idx][LevelTen_keys]]);
                                                              console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                                                          }
                                                        }
                                                        else if(counter_for_2_3===3){
                                                          temp_align_holder = [];
                                                              counter_for_2_3 = 0;
                                                              align_holder = "$$$";
                                                        }
                                                      }
                                                  }
                                                  
                                                  }
                                                  }
                                                //****************** End of Ten ***************
                                              }
                                              else if(LevelNine_keys === segment_key){
                                                console.log(LevelNine_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys]);
                                              }
                                              else{           
                                                if(align_holder != LevelNine_keys.slice(0,align_main_length+3) ){
                                                  align_holder = LevelNine_keys.slice(0,align_main_length+3); 
                                                }
                                                if(LevelNine_keys.slice(0,align_main_length+3) === align_holder){ 
                                                  temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys]);
                                                  counter_for_2_3++;
                                                  if(counter_for_2_3===2){
                                                    if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys]]=== undefined){
                                                      
                                                        console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                                                        temp_align_holder = [];
                                                        counter_for_2_3 = 0;
                                                        align_holder = "$$$";
                                                    }
                                                    
                                                    
                                                    else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys]] != undefined){
                                                      
                                                        temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys][LevelNine_idx][LevelNine_keys]]);
                                                        console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                                                    }
                                                  }
                                                  else if(counter_for_2_3===3){
                                                    temp_align_holder = [];
                                                        counter_for_2_3 = 0;
                                                        align_holder = "$$$";
                                                  }
                                                }
                                            }
                                            
                                            }
                                            }
                                          //****************** End of Nine ***************
                                        }
                                        else if(LevelEight_keys === segment_key){
                                          align_main_length = LevelEight_keys.length;
                                          console.log(LevelEight_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys]);
                                        }
                                        else{           
                                          if(align_holder != LevelEight_keys.slice(0,align_main_length+3) ){
                                            align_holder = LevelEight_keys.slice(0,align_main_length+3); 
                                          }
                                          if(LevelEight_keys.slice(0,align_main_length+3) === align_holder){ 
                                            temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys]);
                                            counter_for_2_3++;
                                            if(counter_for_2_3===2){
                                              if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys]]=== undefined){
                                                
                                                  console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                                                  temp_align_holder = [];
                                                  counter_for_2_3 = 0;
                                                  align_holder = "$$$";
                                              }
                                              
                                              
                                              else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys]] != undefined){
                                                
                                                  temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys][LevelEight_idx][LevelEight_keys]]);
                                                  console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                                              }
                                            }
                                            else if(counter_for_2_3===3){
                                              temp_align_holder = [];
                                                  counter_for_2_3 = 0;
                                                  align_holder = "$$$";
                                            }
                                          }
                                      }  
                                      
                                      }
                                      }
                                    //****************** End of Eight ***************
                                  }
                                  else if(LevelSeven_keys === segment_key){
                                    align_main_length = LevelSeven_keys.length;
                                    console.log(LevelSeven_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys]);
                                  }
                                  else{           
                                    if(align_holder != LevelSeven_keys.slice(0,align_main_length+3) ){
                                      align_holder = LevelSeven_keys.slice(0,align_main_length+3); 
                                    }
                                    if(LevelSeven_keys.slice(0,align_main_length+3) === align_holder){ 
                                      temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys]);
                                      counter_for_2_3++;
                                      if(counter_for_2_3===2){
                                        if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys]]=== undefined){
                                          
                                            console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                                            temp_align_holder = [];
                                            counter_for_2_3 = 0;
                                            align_holder = "$$$";
                                        }
                                        
                                        
                                        else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys]] != undefined){
                                          
                                            temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys][LevelSeven_idx][LevelSeven_keys]]);
                                            console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                                        }
                                      }
                                      else if(counter_for_2_3===3){
                                        temp_align_holder = [];
                                            counter_for_2_3 = 0;
                                            align_holder = "$$$";
                                      }
                                    }
                                }
                                
                                }
                                }
                              //****************** End of Seven ***************
                            }
                            else if(LevelSix_keys === segment_key){
                              align_main_length = LevelSix_keys.length;
                              console.log(LevelSix_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys]);
                            }
                            else{           
                              if(align_holder != LevelSix_keys.slice(0,align_main_length+3) ){
                                align_holder = LevelSix_keys.slice(0,align_main_length+3); 
                              }
                              if(LevelSix_keys.slice(0,align_main_length+3) === align_holder){ 
                                temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys]);
                                counter_for_2_3++;
                                if(counter_for_2_3===2){
                                  if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys]]=== undefined){
                                    
                                      console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                                      temp_align_holder = [];
                                      counter_for_2_3 = 0;
                                      align_holder = "$$$";
                                  }
                                  
                                  
                                  else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys]] != undefined){
                                    
                                      temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys][LevelSix_idx][LevelSix_keys]]);
                                      console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                                      
                                    
                                  }
                                }
                                else if(counter_for_2_3===3){
                                  temp_align_holder = [];
                                      counter_for_2_3 = 0;
                                      align_holder = "$$$";
                                }
                              }
                          }
                          
                          }
                          }
                        //****************** End of Six ***************
                      }
                      else if(LevelFive_keys === segment_key){
                        align_main_length = LevelFive_keys.length;
                        console.log(LevelFive_keys.slice(0,align_main_length+3)+"    "+LevelFive_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys]);
                      }
                       
                       else{           
                      if(align_holder != LevelFive_keys.slice(0,align_main_length+3) ){
                        align_holder = LevelFive_keys.slice(0,align_main_length+3); 
                      }
                      if(LevelFive_keys.slice(0,align_main_length+3) === align_holder){ 
                        temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys]);
                        counter_for_2_3++;
                        if(counter_for_2_3===2){
                          if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys]]=== undefined){
                            
                              console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                              temp_align_holder = [];
                              counter_for_2_3 = 0;
                              align_holder = "$$$";
                          }
                          
                          
                          else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys]] != undefined){
                            
                              temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys][LevelFive_idx][LevelFive_keys]]);
                              console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                              
                            
                          }
                        }
                        else if(counter_for_2_3===3){
                          temp_align_holder = [];
                              counter_for_2_3 = 0;
                              align_holder = "$$$";
                        }
                      }
                  }
                    
                    }
                    }
                 
                  //****************** End of Five ***************
                                }
                                else if(LevelFour_keys === segment_key){
                                  align_main_length = LevelFour_keys.length;
                                  
                                    console.log(LevelFour_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys]);
                                    
                                  }
                                else{ 
                                  
                                  if(align_holder != LevelFour_keys.slice(0,align_main_length+3) ){
                                    align_holder = LevelFour_keys.slice(0,align_main_length+3); 
                                  }
                                  if(LevelFour_keys.slice(0,align_main_length+3) === align_holder){ 
                                    temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys]);
                                    counter_for_2_3++;
                                    if(counter_for_2_3===2){
                                      if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys]]=== undefined){
                                        
                                          console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]);
                                          temp_align_holder = [];
                                          counter_for_2_3 = 0;
                                          align_holder = "$$$";
                                      }
                                      
                                      
                                      else if(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys]] != undefined){
                                        
                                          temp_align_holder.push(obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys+"_code_"+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys][LevelFour_idx][LevelFour_keys]]);
                                          console.log(temp_align_holder[0]+"  :  "+temp_align_holder[1]+" <> "+temp_align_holder[2]);
                                          
                                        
                                      }
                                    }
                                    else if(counter_for_2_3===3){
                                      temp_align_holder = [];
                                          counter_for_2_3 = 0;
                                          align_holder = "$$$";
                                    }
                                  }
                              }
                            
                              }
                            }
            //****************** End of Four ***************  
                        }
                        else if(LevelThree_keys === segment_key){
                          align_main_length = LevelThree_keys.length;
                            console.log(LevelThree_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][LevelTwo_idx][LevelTwo_keys][LevelThree_idx][LevelThree_keys]);
                        }
                       else{ 
                          
                            var s = LevelThree_keys.replace(/([a-z])([A-Z])/g, '$1 $2');
                            console.log(interchanges+" "+interchange_idx+" "+interchange_keys+ " "+LevelTwo_idx+" "+LevelTwo_keys+" "+LevelThree_idx+" "+LevelThree_keys+" "+s.split("_")[2]+" : "+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys][LevelThree_idx][LevelThree_keys]);
                       }
                    
                      }
                    }
        //****************** End of Three ***************
            }
            else if(LevelTwo_keys === segment_key){
                // console.log("Checking Level Two Heading");
                console.log(LevelTwo_keys+" : "+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys]);
            }
            else{ 
              // console.log("Checking Level Two Data");
                var s = LevelTwo_keys.replace(/([a-z])([A-Z])/g, '$1 $2');
            console.log(interchanges+" "+interchange_idx+" "+interchange_keys+ " "+LevelTwo_idx+" "+LevelTwo_keys+" "+s.split("_")[2]+" : "+obj[interchanges][interchange_idx][interchange_keys][[LevelTwo_idx]][LevelTwo_keys]);
           }
        
          }
        }
  //****************** End of Two ***************  
    }
    else if(interchange_keys === segment_key){
        console.log(interchange_keys+" : "+obj[interchanges][interchange_idx][interchange_keys]);
    }
    else{ 
        var s = interchange_keys.replace(/([a-z])([A-Z])/g, '$1 $2');
    console.log(interchanges+" "+interchange_idx+" "+interchange_keys+ " "+s.split("_")[2]+" : "+obj[interchanges][interchange_idx][interchange_keys]);
   }
}
}
//****************** End of Interchange ***************
}