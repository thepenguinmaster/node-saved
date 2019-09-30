var express = require('express');
var router = express.Router();
User = require("./models/user.js")


router.get('/', function(req, res, next) {
    res.send('Hello World');
    res.send(new {
        Message: "Hello!",
        Data: "Test"        
    });
    res.end;
});

router.get('/user', function(req, res, next) {
    //res.send('Hello World');
    res.send(new User("Bob","bob@bob.com", 22) );
    res.end;
});

router.post('/user', function(req, res, next) {
    var name = req.body.name;
    var domain = req.body.domain;
    var age = req.body.age;
    // test2
    // res.send(name+age+'@'+domain);
    res.send("Nope");
    res.end;
});


module.exports = router;
