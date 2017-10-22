const express = require('express'),
cors = require('cors'),
gc = require(__dirname + '/controller/controller.js'),
    
{ json } = require('body-parser'),
port = 3008
axios = require('axios')


var app = express();

app.use(json());
app.use("/", express.static(__dirname + '/public'))



const baseURL = "/test"

app.get(baseURL, gc.read) 
app.post(baseURL, gc.create)
app.put(`${baseURL}/:id`, gc.update)
app.delete(`${baseURL}/:id`, gc.delete)




app.listen(port,() => {
    console.log(`Listening on port: ${port}`)
})