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
async function run() {
	try {
		await client.connect();
		// Here collection think like as array. first-mongodb is my website name 
		const userCollection = client.db("first-mongodb").collection("user");
		// app.post('url link', function)
		// POST User : add a new user
        app.post('/user', async(req, res) =>{
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result)
        });
		// make a user. this is like as document 
		/* const user = { name: "komola khatun", email: 'komolakhatun@gmail.com' };
		const result = await userCollections.insertOne(user);
		console.log(`User inserted with Id: ${result.insertedId}`); */
	}

	finally {
		// if you want to connect your server periodically  so you give not write this code. After giving this code you do not connect with server. 
		await client.close(); 
	}
}

// if get some error solve by this catch method. you must write this code for call this run() function 
// dir means - directory 
run().catch(console.dir)