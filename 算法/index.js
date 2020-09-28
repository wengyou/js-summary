const fs = require('fs');
const process = require('process');
const http = require('http');

const options = {
    hostname: 'https://apinew.juejin.im',
    port: 443,
    path: '/booklet_api/v1/section/get',
    
}
const data = http.request()
const outputDir = path.resolve(process.cwd(),'1.txt');

