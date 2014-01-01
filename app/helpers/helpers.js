
module.exports = function(views){

    function layout(body){
        return views('layouts.home', { yield:body, stylesheet:views('styles.main') })
    }
    function fixed(view){
        return function(i,o){ o.end(view) }
    }
    function error(code,i,o){
        var message = ''

        if (code == 404)
            message = 'Page not found.'
        else if (code == 500)
            message = 'Internal server error'

        o.end( layout(views('error', {code:code, message:message} )) )
    }

    return {fixed:fixed, layout:layout, error:error}
}
