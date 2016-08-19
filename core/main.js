var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
	console.log('+ Back-end started and listening on port ' + port);
})
