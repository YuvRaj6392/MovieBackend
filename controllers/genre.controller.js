const db = require('../models');
const Genre =db.genres;

module.exports.findAllGenres = (req,res)=>{
    Genre.find({}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:"Some error occurred while retrieving the genres"
        }); 
    })
}