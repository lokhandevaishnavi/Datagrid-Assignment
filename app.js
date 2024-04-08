const express = require('express');
const mongoose = require('mongoose');

var familyAPI = require("./routes/familyManagement/familyController.js")
var fileAPI = require("./routes/fileManagement/fileController.js");


const app = express();
const PORT = 4000;

mongoose.connect('mongodb://localhost:27017/FamilyInformation', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/',familyAPI);
app.use('/',fileAPI);






app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});