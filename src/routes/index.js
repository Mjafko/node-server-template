import express from 'express'

import test from './test'
import ujp from './ujp'

const router = new express.Router()

router.get( '/', async ( req, res ) => {
	res.send( { msg: 'Invalid request.' } )
} )

//  Import routes here
router.use( '/test', test )

export default router