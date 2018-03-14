var express = require('express');
var router = express.Router();

router.get('/branch4', function(req, res) {
    res.render('branch4', {
        "pageTitle": "Branch4",
        "pageID": "branch4"
    });
});

module.exports = router;