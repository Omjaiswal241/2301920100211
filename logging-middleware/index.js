const express=require('express');
const app=express();
function loggermiddleware(req,res,next)
{
    console.log("Method is"+req.method);
    console.log("Host is"+req.hostname);
    console.log("Route is"+req.url);
    console.log(new Date());
    next();
}
app.use(loggermiddleware);