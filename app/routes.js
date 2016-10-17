
module.exports = function(views, controllers, router, helpers){
    var c = controllers

    router.config({ 404: helpers.error })

    router.routes
    ( '/', c.index )
    ( '/status', c.status )
    ( '/docs/{any}', c.docs )

}
