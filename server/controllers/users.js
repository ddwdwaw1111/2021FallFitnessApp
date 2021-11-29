const express = require("express");
const model = require("../models/users");
const friends = require("../models/friends");

const app = express.Router();

app
    .get("/", (req, res, next) =>{
        model.GetAll()
        .then(user=>{ 
            res.send(user);
        })
        .catch(next) 
    })
    .get("/:user_id", (req, res, next) =>{
        model.Get(req.params.user_id)
           .then(user=>{ 
               res.send(user);
           })
           .catch(next) 
   })
   .get("/byhandle/:handle", (req, res, next) =>{
        model.GetByHandle(req.params.handle)
            .then(user=>{ 
                res.send(user);
            })
            .catch(next) 
    })
    .patch("/addLog/:user_id", (req, res, next) =>{
        model   .AddLog(req.params.user_id, req.body)
                .then( x=> res.status(201).send(x) )
                .catch(next)
    })
    .patch("/:user_id", (req, res, next) =>{

        model   .Update(req.params.user_id, req.body)
                .then( user=> res.send(user) )
                .catch(next) 

    })
    .patch("/updateTracker/:user_id", (req, res, next) =>{

        model   .UpdateTracker(req.params.user_id, req.body)
                .then( user=> res.send(user) )
                .catch(next) 

    })
    .patch("/changePassword/:user_id", (req, res, next) =>{

        model   .Update(req.params.user_id, req.body)
                .then( user=> res.send(user) )
                .catch(next) 

    })
    .delete("/:user_id", (req, res, next) =>{

        model   .Delete(req.params.user_id)
                .then( user=> res.send({ deleted: user }) )
                .catch(next) 

    })
    .post("/:follower/follow/:followee", (req, res, next) =>{

        friends.Follow(req.params.follower, req.params.followee)
            .then(response=>{
                if(response.modifiedCount){
                    res.send({ success: true });                    
                }else{
                    throw { code: 409, msg: "You are already following or trying to follow " + req.params.followee }
                } 
            })
            .catch(next) 

    })
    .delete("/:follower/follow/:followee", (req, res, next) =>{

        friends.UnFollow(req.params.follower, req.params.followee)
            .then(response=>{
                if(response.modifiedCount){
                    res.send({ success: true });                    
                }else{
                    throw { code: 404, msg: "You aren't following or trying to follow " + req.params.followee }
                } 
            })
            .catch(next) 

    })
    .patch("/:follower/approve/:followee/", (req, res, next) =>{
        console.log('controller'+ req.body.isApproved)
        friends.Approve(req.params.follower, req.params.followee, req.body.isApproved)
            .then(response=>{
                if(response.modifiedCount){
                    res.send({ success: true });                    
                }else{
                    throw { code: 409, msg:  req.params.follower + " hasn't request to follow you." }
                } 
            })
            .catch(next) 

    })
    .post("/login", (req, res, next) =>{

        model.Login(req.body.handle, req.body.password)
            .then(user=>{ 
                res.send(user);
            })
            .catch(next) 

    })
    .post("/register", (req, res, next) =>{
        console.log("controller" + req.body)
        model.Add(req.body)
            .then(user=>{
                res.status(201).send(user);
            })
            .catch(next) 
    })


module.exports = app;