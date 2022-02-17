let express = require('express');
let router= express.Router();
let bodyParser = require('body-parser');
const db = require('../database/database');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false})


router.post('/',  urlencodedParser,(req,res) =>{

    let email = req.body.email;
     let nom = req.body.nom;
     let prenom = req.body.prenom;
     let civilitee = req.body.civiliter;
     let ville = req.body.ville;
     let code = req.body.code;
     
    console.log(req.body);




   let sql= "INSERT INTO `users` SET (`email`, `nom`, `prenom`, `civilitee`, `ville`, `code`) VALUES (?, ?, ?, ?, ?, ?)"; 
//    ('"+email+"' , '"+nom+"' , '"+prenom+"', '"+civilitee+"', '"+ville+"', '"+code+"')" 
   db.query(sql, [email,nom,prenom,civilitee,ville,code],(err,result)=>{
       console.log('bonjour');
    if (!err) {
        
        res.redirect('/')
    } else {
       console.log('error 404 ' + result);
       res.send('bonjour') 
    }
   })

})












    // db.query('"INSERT INTO users SET email = ?, nom = ?,' [email, nom],(err,rows) =>{
    //     db.release();
    //      if (!err) {
        
    //     res.redirect('/')
    // } else {
    //    console.log('error 404 ' + result);
    //    res.send('bonjour') 
    // }

    // } )












// router.post('/' , urlencodedParser,function(req,res , ){
//      let email = req.body.email;
//      let nom = req.body.nom;
//      let prenom = req.body.prenom;
//      let civilitee = req.body.civiliter;
//      let ville = req.body.ville;
//      let code = req.body.code;

//     console.log(prenom, nom, code);

//    let sql= "INSERT INTO `users` SET (`email`, `nom`, `prenom`, `civilitee`, `ville`, `code`) VALUES (?, ?, ?, ?, ?, ?)"; 
// //    ('"+email+"' , '"+nom+"' , '"+prenom+"', '"+civilitee+"', '"+ville+"', '"+code+"')" 
//    db.query(sql, [email,nom,prenom,civilitee,ville,code],(err,result)=>{
//        console.log('bonjour');
//     if (!err) {
        
//         res.redirect('/')
//     } else {
//        console.log('error 404 ' + result);
//        res.send('bonjour') 
//     }
//    })
   
// })


router.get('/',(req,res)=>{
    res.render('../views/inscription')
})


module.exports = router;