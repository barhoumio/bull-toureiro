var app = require('./lib/toureiro')({
    development: true,
    redis: {
        host: 'localhost',
        port: 6379,
        opts: {}
    }
});
var server = app.listen(3004, function () {
    console.log('Toureiro is now listening at port 3004...');
});
