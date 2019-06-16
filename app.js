var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter = require('./routes/index'))

app.use((req, res, next) => {
    res.header("Cache-Control", "public, max-age=2592000");
    next();
});

app.listen(process.env.PORT || '3000', function(){
	console.log("Website listening on port 3000");
});