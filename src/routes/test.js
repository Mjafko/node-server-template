import express from 'express'

const router = new express.Router()


//  Test
router.get( '/foo', async ( req, res, next ) => {

    console.log( '/foo - get', req.params )
    return res.send( 'Hello world' )
} )

export default router
