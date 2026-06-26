const express=require("express")
const app=express()
count=document.getElementById("count")
function notification(click)
{
    if(click)
    {
        count++;
    }
    return count;
}