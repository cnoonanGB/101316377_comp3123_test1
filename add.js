var fs = require('fs');
var path = require('path');
var directory = 'C:/School/FULL_STACK/LabTest1/Logs';
var process = require('process');


if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

process.chdir('C:/School/FULL_STACK/LabTest1/Logs');

fs.appendFile('log0.txt', 'Some Data', (err) =>{
   if (err) throw err;
   console.log('log0.txt');
});

fs.appendFile('log1.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log1.txt');
 });

 fs.appendFile('log2.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log2.txt');
 });

 fs.appendFile('log3.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log3.txt');
 });

 fs.appendFile('log4.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log4.txt');
 });

 fs.appendFile('log5.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log5.txt');
 });

 fs.appendFile('log6.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log6.txt');
 });

 fs.appendFile('log7.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log7.txt');
 });

 fs.appendFile('log8.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log8.txt');
 });

 fs.appendFile('log9.txt', 'Some Data', (err) =>{
    if (err) throw err;
    console.log('log9.txt');
 });
