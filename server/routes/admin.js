const express = require('express')
const router = express.Router()
router.get('/',async (req, res) => {
    
    res.send('THIS WORKS')
})

module.exports = router;
