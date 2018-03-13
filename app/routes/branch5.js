var express = require('express');
var router = express.Router();

router.get('/branch5', function(req, res) {
    res.send("Git branch number 5");
});

module.exports = router;