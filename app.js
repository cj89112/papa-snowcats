const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
const { MongoClient, ServerApiVersion } = require('mongodb');

// set the view engine to ejs

let path = require('path'); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file

//type in result from the enneagram test
let myTypeServer = "The Investigator";

console.log(process.env.URI)

app.get('/', function (req, res) {

    res.render('index', {

        myTypeClient: myTypeServer
    });
})    

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get('/', function (req, res) {
  
    res.send('Hello World from Express')
})

// app.listen(3000)

app.listen(port, () => {
    
  console.log(`mike app listening on port ${port}`)
})