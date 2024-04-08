'use strict';

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const datetimestamp = Date.now();
        cb(null, datetimestamp + '-' + file.originalname);
    }
});

const upload = multer({ 
    storage: storage
}).array('file');  

module.exports = {
    upload: upload
};
