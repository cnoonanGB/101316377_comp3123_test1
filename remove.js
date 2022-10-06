var fs = require('fs');
var path = require('path');
var directory = 'C:/School/FULL_STACK/LabTest1/Logs';


fs.readdir(directory, (err, logs) => {
    if (err) throw err;

    for (const log of logs) {
        console.log(log);
        fs.unlink(path.join(directory, log), (err) => {
            if (err) throw err;
        })
    }
});


