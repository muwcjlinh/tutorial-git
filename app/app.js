var express = require ('express');
var app = express();
var data = require('./data/data.json');
var dataB4 = require('./data/b4.json');


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('dataT', data);
app.set('teamGSW', dataB4);

app.locals.siteTitle = "Git test";

app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/branch4'));
app.use(require('./routes/branch5'));

app.get('/', function(req, res) {
    res.send("Hello world");
})

var server = app.listen(app.get('port'), function() {
    console.log("Server listening on " + app.get('port'));
});