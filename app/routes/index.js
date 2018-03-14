var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var data = req.app.get('dataT');
    var indexData = data.team;

    res.render('index', {
        pageTitle: 'Homepage',
        index : indexData,
        pageID: 'homepage'
    })
});

module.exports = router;