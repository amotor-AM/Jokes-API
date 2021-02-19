const express = require("express")
const helmet = require("helmet")
const jokes = require("./jokes")
const {findJoke, verifyJoke} = require("./middleware")

// Set up app server
const app = express()

// To save yourself from having issues with express always use express.static, express.json and express.urlencoded values. And always wear a helmet to set your headers and protect your API
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const bodyParser = require('body-parser') 
app.use(bodyParser.json()); 

app.get("/", (req, res) => {
    const num = Math.round(Math.random() * jokes.length)
    const joke = jokes[num]
    res.status(200).json(joke)
})

app.get("/:id", findJoke(), (req, res) => {
    res.status(200).json(jokes[req.params.id])
})

app.post("/add", verifyJoke(), (req, res) => {
    var joke = req.body
    jokes.push(joke)
    res.send(`Joke Added Successfully! You can see it by typing /:${jokes.length}`)
})

app.put("/:id", findJoke(), verifyJoke(), (req, res) => {
    jokes[req.params.id] = req.body
    res.status(202).send("Joke updated successfully")
})

app.delete("/:id", findJoke(), (req, res) => {
    jokes.splice(req.params.id, 1)
    res.status(200).send("Joke removed successfully")
})



// Set the port variable
const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server is up and running on port ${port}`)
