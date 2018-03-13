var express = require('express');
var router = express.Router();

router.get('/branch4', function(req, res) {
    res.send("Git branch number 4.")
});

module.exports = router;