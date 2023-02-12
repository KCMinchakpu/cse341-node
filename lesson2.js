const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://eliakim:kike123@cluster0.y7kwexc.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
           await client.connect();
           await  listDatabases(client);
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databaseslist = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databaseslist.databases.forEach(db=> {
       console.log('- ${db.name}');
     })
    }

    const dotenv = require("dotenv")
    dotenv.config()
    