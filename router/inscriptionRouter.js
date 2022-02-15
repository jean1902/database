let express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false})
let mysql = require('mysql')






router.post


// db.query('CREATE DATABASE mabdd' ,function(err,result){
//     if(err) throw err ;
//     console.log("result");
// })




router.post('/', urlencodedParser ,function (req,res){
    let data = req.body;
    console.log(data);
    res.redirect('/')
})

router.get('/',(req,res)=>{
    res.render('../views/inscription')
})


module.exports = router;