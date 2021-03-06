// the basic five steps are here given below.
/* ****************
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running My Node Server');
});
app.listen(port, () => {
	console.log('crud server is runing');
})
************ */
/* *************
// mongodb information
1. username : mongobdUserOne
2. password : LrV1DiVfWaPvNPIx
************** */
/* **************
how to connect server with mongodb the steps are given blow 
1. go to mongodb cluster atlas and sign up your account  
2. complete the survey 
3. create cluster 
4. then give a valid user name and select a auto password and save them for future work. 
5. select the my local environment. 
6. add the current Ip address clicked 
7. go to data base
8 . go to network access then click allow access from anywhere 
9.  then click the get start and select connect to your cluster. you can go the same option by clicking database that remain in the sidebar menu.  
10 . then select the connect option and go to connect your application. 
11. copy full code and past the code in my code file. 
************** */

/* *****************
-------------------------------
The Steps of the mongodb curd operations 
-------------------------
1. search node mongodb crud operation then go to the mongodb fundamentals link. or go to this link https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
2. click the insert operation and select the insert a document. 

3. replace this code [
	client.connect(err => {
	const collection = client.db("first-mongodb").collection("users");
	console.log('db connected ');
  // perform actions on the collection object
  client.close();
});
]
by this code [
	sync function run() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
]

************** */
