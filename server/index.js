const express = require('express'),
cors = require('cors'),
    
{ json } = require('body-parser'),
port = 3008
axios = require('axios')


app = express();
app.use(json());
app.use("/", express.static(__dirname + '/public'))
app.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5')




app.listen(port,() => {
    console.log(`Listening on port: ${port}`)
})