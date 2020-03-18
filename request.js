const maxApi = require('max-api');
const express = require("express");
const app = express();

//npm lib from https://github.com/do-web/curl-request#readme
const { Curl } = require('node-libcurl');

const curl = new Curl();

curl.setOpt('URL', 'www.google.com');
curl.setOpt('FOLLOWLOCATION', true);

maxApi.addHandler('makeRequest',function(){
curl.on('end',function(statusCode,data,headers){
    maxApi.outlet(data);
    console.log(data);
        // this.close();

})
})

// curl.on('end', function (statusCode, data, headers) {
//     console.log(data);//succeed!
//     console.info(statusCode);
//     console.info('---');
//     console.info(data.length);
//     console.info('---');
//     console.info(this.getInfo('TOTAL_TIME'));

//     this.close();
// });

curl.on('error', curl.close.bind(curl));
curl.perform();



app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});

