let express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
let db = require('../database/database');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false})


router.post('/',  urlencodedParser,(req,res) =>{

    let {email,nom,prenom,civilitee,ville,code} = req.body
    console.log(req.body)

    let sql= "INSERT INTO `users`(`nom`, `prenom`, `email`, `civilitee`, `ville`, `code postal`) VALUES (?,?,?,?,?,?)"; 
    
    db.query(sql,[nom,prenom,email,civilitee,ville,code],(err,result)=>{
       console.log('bonjour ');
        if (err) { 
            console.log(err);
            res.send('bonjour') 
            
        } else {
            console.log("success",result);
         res.redirect('/')
        }
   })

})


router.get('/',(req,res)=>{
    res.render('../views/inscription')
})


module.exports = router;