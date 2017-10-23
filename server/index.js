const express = require('express'),
cors = require('cors'),
gc = require(__dirname + '/controller/controller.js'),
    
{ json } = require('body-parser'),
port = 3008
axios = require('axios')


var app = express();

app.use(json());
app.use("/", express.static(__dirname + '/public'))

const base = "http://api.giphy.com/v1/gifs/search?q="
const theKey = "&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5"
const searchingFor = []
const baseURL = "/api/data"

app.get(`/api/data`, (req, res) => {
    var testz = req.query.q
axios.get(`${base}${testz}${theKey}`) .then(response => { res.json(response.data)
    
}).catch(console.log)

})



app.listen(port,() => {
    console.log(`Listening on port: ${port}`)
})