var express = require('express');
var router = express.Router();

router.get('/branch4', function(req, res) {
    var data = req.app.get('teamGSW');
    var dataGSW = data.GSW;

    res.render('branch4', {
        "pageTitle": "Branch4",
        "b4": dataGSW,
        "pageID": "branch4"
    });
});

module.exports = router;