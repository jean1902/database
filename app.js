let express = require('express');

let app = express();
let accueil = require("./router/PageIndex");
let inscription = require("./router/inscriptionRouter");
const db = require('./database/database');

db.connect(function (err) {
    if(!err) {
        console.log('eeee');
        app.use(express.static('public'));
        app.set('view engine', 'ejs')
        app.use('/', accueil);
        app.use('/inscription', inscription)
    }
    else{
        console.log('connection echec ' + JSON.stringify(err , undefined ,2));  

    }
});







app.listen(8080)