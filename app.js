const express = require("express");
const mysql = require("mysql");
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "grocery_bud"
});

app.get("/",(req,res)=>{
    con.query("SELECT * FROM `tbl_grocery_bud` WHERE 1",(err,data)=>{
        if(err){
            console.log(err);
        }
        res.render("index",{data});
    });
});

app.post("/",(req,res)=>{
    con.query("INSERT INTO `tbl_grocery_bud`(`item_name`) VALUES (?)",[req.body.grocery_item],(err,data)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});

app.get("/delete/:id",(req,res)=>{
    con.query("DELETE FROM `tbl_grocery_bud` WHERE id = ?",[req.params.id],(err,data)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});

app.post("/edit/:id",(req,res)=>{
    con.query("UPDATE `tbl_grocery_bud` SET `item_name`= ? WHERE id = ?",[req.body.grocery_item,req.params.id],(err,data)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});

app.get("/deleteAll",(req,res)=>{
    con.query("DELETE FROM `tbl_grocery_bud` WHERE 1",(err,data)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});
app.listen(3000);