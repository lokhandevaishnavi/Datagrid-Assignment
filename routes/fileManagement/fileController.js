'use strict';

const express = require('express');
const router = express.Router();
const upload = require("../fileManagement/fileModel.js").upload;

router.post('/uploadImage', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(400).send({ message: 'Error uploading files!' });
        }

        const files = req.files; 
        res.status(200).send({ filesUploaded: files, status: true }); 
    });
});


module.exports = router;
