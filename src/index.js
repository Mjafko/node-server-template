import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import bodyParser from 'body-parser'

import routes from './routes/index'


const app = express()

const server = createServer( app )

app.use( cors( "*" ) )

app.use( bodyParser.json( { limit: "50mb" } ) )

app.use( '/', routes )

const port = 3000

server.listen( port, () => {
	console.log( `Test node server is running on port: ${ port }.` )
} )

export default server