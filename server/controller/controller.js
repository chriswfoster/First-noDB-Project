

const base = "http://api.giphy.com/v1/gifs/search?q="
const theKey = "&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5"
const searchingFor = []

module.exports = {
    create:(req, res) =>{
    // var yay = req.query.val1
    //  searchingFor.push(yay)
    //   console.log(yay)
res.status(200).send(`${base}${req.query.val1}${theKey}`)

},
    read: (req, res) => {
        var yay = req.query.val1
        searchingFor.push(yay)
         console.log(yay)
res.status(200).send(`${base}${searchingFor}${theKey}`)
}
}