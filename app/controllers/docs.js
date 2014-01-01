
module.exports = function(_, views, controllers, helpers){

    // function layout(body){
    //     return views('layouts.home', { yield:body, stylesheet:views('styles.main') })
    // }
    var layout = helpers.layout

    controllers.index = function(i,o,a,r){
        o.end( layout(views('index')) )
    }
    controllers.docs = function(i,o,a,r){
        var view = views(_.reduce(a,function(cumulate, arg){
            return cumulate+'.'+arg
        }))

        if (view)
            o.end( layout(view) )
        else
            r.error(404)
    }
}
