const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  birthdate: { type: Date, required: true },
  mobileNo: { type: Number, required: true },
  address: {
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true }
  },
  maritalStatus: { type: String, enum: ['Married', 'Unmarried'], required: true },
  weddingDate: { type: Date },
  hobbies: [{ type: String }],


  familyMembers: [{
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    maritalStatus: { type: String, enum: ['Married', 'Unmarried'], required: true },
    weddingDate: { type: Date },
    education: { type: String , required: false},
    photo: { type: String, required: false }
  }]
});

var addFamily = mongoose.model('family', familySchema);


module.exports = {
    addFamily: addFamily

};