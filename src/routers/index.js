const RegisterRouter = require('./RegisterRouter')
const EmployerRouter = require('./routersLayer2/EmployerRouter')

const routes = (app) =>{
    app.use('/api/register', RegisterRouter)
    
}

module.exports = routes