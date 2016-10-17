
module.exports = function(_, views, controllers, helpers){

    var layout = helpers.layout

    controllers.index = function(req, res, args, opts){
        res.end( layout(views('index')) )
    }

    controllers.status = function(req, res){
        var view = views('status')
        if (view)
            res.end( layout(view) )
        else
            var errorPage = views('error', { code:404, message:'Page unavailable' })
            res.end( layout(errorPage) )
    }

    controllers.docs = function(req, res, args, opts){

        var view = views('docs.'+args[0])

        if (view)
            res.end( layout(view) )
        else
            var errorPage = views('error', { code:404, message:'Page unavailable' })
            res.end( layout(errorPage) )
    }
}
