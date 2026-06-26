const express=require("express");
const { randomFill } = require("node:crypto");
const app=express()
var vehicle_count=0;
var vehicle=[];
var j=0;
var cnt=0;
app.put("/vehiclein",function(req,res)
{
    vehicle[cnt++]=randomFill;
    vehicle_count++;
    res.response("In successfully");
})
app.get("/no_ofvehicle",function(req,res)
{
    res.response(vehicle_count);
})
app.get("/getvehicle",function(req,res)
{
    res.response(vehicle[j++])
})

app.listen(3000);