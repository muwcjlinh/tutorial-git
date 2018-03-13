var express = require ('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Git test";

app.use(require('./routes/index'));

var server = app.listen(app.get('port'), function() {
    console.log("Server listening on " + app.get('port'));
});