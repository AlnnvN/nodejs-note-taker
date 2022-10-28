const { render } = require("ejs");
const express = require('express');
const app = express();
const notedb = require('./database/Note.js');
const database = require('./database/database.js');

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

database
    .authenticate()
    .then(()=>{console.log("Database Connected Successfully");})
    .catch((error)=>{console.log(error);})

app.get("/",(req,res)=>{
    notedb.findAll({raw:true,order:[
        ['id','DESC']
    ]}).then(notes=>{
        res.render('index',{
            notes: notes,
        });
    });
});

app.post("/savenote",(req,res)=>{
    if(req.body.note != ""){
        notedb.create({
            content: req.body.note
        }).then(()=>{
            res.redirect('/');
        })
    }
});

app.post('/deletenote',(req,res)=>{
    notedb.destroy({
        where: {id:req.body.noteid}
    }).then(()=>{
        res.redirect('/');
    });
})

app.post('/close',(req,res)=>{
    res.redirect('/');
})

app.get("/:universalURL",(req,res)=>{
    res.redirect('/');
});

const port = 3000;
app.listen(port,()=>{
    console.log("Server Listening on http://localhost:"+port);
});