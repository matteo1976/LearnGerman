import express from 'express';
import {PATH} from './constants'



const app = express();
const fs = require('fs');

const readData=(jsonFile)=>JSON.parse( fs.readFileSync(jsonFile))


app.get(PATH.NUMBERS,function(req,res){
    res.send(readData(PATH.JSON_NUMBERS))
})

app.get(PATH.DICTIONARY,function(req,res){
    res.send(readData(PATH.JSON_DICTIONARY))
})


app.get(PATH.VERB,function(req,res){
    res.send(readData(PATH.JSON_VERB))
})
app.get(PATH.CENTENCES ,function(req,res){
    res.send(readData(PATH.JSON_CENTENCES))
})




app.listen(3000,'localhost',function(){
    console.log("listening on port 3000! server ready")
})


