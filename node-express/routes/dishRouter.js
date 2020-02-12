const express = require('express');
const bodyParser= require('body-parser');

const dishRouter = express.Router()
dishRouter.use(bodyParser.json())
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=>{
    res.end('will send all dishes to you');
})
.post((req,res,next)=>{
    res.end("will add dish: " + req.body.name + ' with details: ' + req.body.details)
})
.put((req,res,next)=>{
    res.end("not supported by /dishes")
})
.delete((req,res,next)=>{
    res.end("deleting all dishes")
});

dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=>{
    res.end('will send details of the dish' + req.params.dishId);
})
.post((req,res,next)=>{
    res.end("POST operation not supported on /dishes/"+req.params.dishId)
})
.put((req,res,next)=>{
    res.write("updating the dish: " + req.params.dishId+"\n")
    res.end( "will update dish: "+ req.body.name +"\nwith details"+ req.body.description)
})
.delete((req,res,next)=>{
    res.end("deleting dish"+req.params.dishId)
})


module.exports = dishRouter