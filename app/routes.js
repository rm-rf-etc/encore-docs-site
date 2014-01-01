
module.exports = function(views, controllers, router, helpers){
    var c = controllers

    router
    ( '/', c.index )
    ( '/{any}/{any}', c.docs )
    .config({ error: helpers.error })

}
