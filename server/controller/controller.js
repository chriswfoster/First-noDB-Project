

const base = "http://api.giphy.com/v1/gifs/search?q="
const theKey = "&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5"
const searchingFor =[]

module.exports = {
    create:(req, res) =>{
        req.body.id = id
const searchingFor =  req[0]
res.status(200).send(`${base}${searchingFor}${theKey}`)
},
    read: (req, res) => {
    
res.status(200).send(`${base}${searchingFor}${theKey}`)
}
}