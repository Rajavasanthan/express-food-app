var express = require('express');
var router = express.Router();
var {MongoClient,ObjectId} = require("mongodb")
var client = new MongoClient("mongodb+srv://vasanth:admin123@cluster0.fe8hx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
/* GET home page. */
router.get('/', async function (req, res) {
    try {
        var connection = await client.connect();
        var db = connection.db("foodDB")
        var foodItems = await db.collection("restraunts").find({}).toArray()
        res.json(foodItems)
        await connection.close()
    } catch (error) {
        console.log(error)
    }
});

router.get('/res/:id', async function (req, res) {
    try {
        var connection = await client.connect();
        var db = connection.db("foodDB")
        var foodItem = await db.collection("restraunts").findOne({_id:ObjectId(req.params.id)})
        res.json(foodItem)
        await connection.close()
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
