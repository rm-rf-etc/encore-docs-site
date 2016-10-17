
var port = 8080

// Prevents app from breaking when deployed to nodejitsu.
require('fs').exists('../npm-published/encore', function(status){
    if (status) {
        port = 80
        require('../npm-published/encore')(app)
    }
    else {
        port = 8080
        require('encore')(app)
    }
})

function app(_, ioc, fetchfiles, views, server){
    _.log = console.log
    ioc.add('helpers', __dirname+'/app/helpers/helpers')

    ioc.add('controllers', {})
    fetchfiles([
        { path:'./app/controllers/', recursive:true, type:'js', cb:ioc.add }
    ])
    ioc.exec()

    fetchfiles([
        { path:'./app/views/', recursive:true, type:'html', cb:views.add },
        { path:'./app/views/styles/', recursive:false, type:'css', cb:views.add }
    ])
    ioc.exec()

    fetchfiles([
        { path:'./app/', recursive:false, type:'js', cb:ioc.add }
    ])
    ioc.exec()

    server.listen(port)
}
