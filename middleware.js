const jokes = require("./jokes")

function verifyJoke() {
    return(req, res, next) => {
        if(!req.body.setup) {
            res.status(404).json({error: "Every good joke needs a setup"})
        } else if(!req.body.punchline){
            res.status(404).json({error: "You can't leave us hanging. Please include the punchline"})
        } else {
            req.newJoke = req.body
            next()
        }
    }
}

function findJoke() {
    return(req, res, next) => {
       if(!jokes[req.params.id]) {
           res.status(404).json({error: "That joke does not exist"})
       } else {
           next()
       }
    }
}

module.exports = {
    findJoke, 
    verifyJoke
}