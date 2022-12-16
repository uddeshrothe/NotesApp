const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {  // regex code for files to expect in url
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
     // (..) = find files outside  root folder
     //  views = then to look into views folder
     // index.html = to look for the file
})

module.exports = router