
module.exports = function(views){

    function layout(body){
        return views('layouts.home', { yield:body, stylesheet:views('styles.main') })
    }
    function fixed(view){
        return function(req, res){ res.end(view) }
    }
    function error(req, res, code){
        var message = ''

        code = code || 404
        if (code == 404)
            message = 'Page not found.'
        else if (code == 500)
            message = 'Internal server error'

        res.end( layout(views('error', {code:code, message:message} )) )
    }

    return {fixed:fixed, layout:layout, error:error}
}
