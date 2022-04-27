const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
// use middleware 
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
	res.send('Running My Node Server');
});
app.listen(port, () => {
	console.log('crud server is runing');
})
// db user


const uri = "mongodb+srv://mongobdUserOne:LrV1DiVfWaPvNPIx@cluster0.r6xmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
	const collection = client.db("first-mongodb").collection("users");
	console.log('db connected ');
  // perform actions on the collection object
  client.close();
});
