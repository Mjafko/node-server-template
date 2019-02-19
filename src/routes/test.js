import express from 'express'

const router = new express.Router()


//  Test
router.get( '/ujp', async ( req, res, next ) => {

    console.log( '/ujp - get', req.params )
    return res.send( 'Hello world' )
} )

export default router
