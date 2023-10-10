// import tools from pg library
//import { Client } from 'pg' //One line way, throws an error. Must be done the 2 line way as shown on lines 3 & 4 because it's an old library. 
import pg from 'pg'
const { Client } = pg
// import connection string from credentials / secrets file. Be sure to add .js to the file name at the end
import { connectionURI } from './creds.js'

//create client connection to database
const client = new Client({
    connectionString: connectionURI, 
})

//open connection
await client.connect() //await bc you cant runa query until it's connected to the database, so we tell computer to wait.

// run query 
const results = await client.query('SELECT * FROM customers') //This will get the results from the database. Won't save what comes back from the query unless stored in a variable.
console.table(results.rows)

// close connection
client.end()
