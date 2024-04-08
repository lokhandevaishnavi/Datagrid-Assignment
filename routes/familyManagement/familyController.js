const express = require('express');
const router = express.Router();
const addFamily = require('./familyModel.js').addFamily

// Add family information
router.post('/family', async (req, res) => {
  try {
    const familyData = req.body;
    const newFamily = new addFamily(familyData);
    await newFamily.save();
    res.status(201).json({ success: true, message: 'Family information added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add family information', error: error.message });
  }
});

// Get family head list
router.get('/heads', async (req, res) => {
  try {
    const familyHeads = await addFamily.find({}).select('name familyMembers');
    res.status(200).json({ success: true, familyHeads });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch family heads', error: error.message });
  }
});

// Get family details by ID
router.get('/:id', async (req, res) => {
  try {
    const familyId = req.params.id;
    const familyDetails = await addFamily.findById(familyId);
    res.status(200).json({ success: true, familyDetails });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch family details', error: error.message });
  }
});

module.exports = router;
