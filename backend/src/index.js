const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)


/**
 * Rota / recursos
 * 
 */
/**
 * Métodos HTTP:
 * 
 * get: buscar/listar uma informação do backend
 * post: Criar uma informação no back-end
 * put: alterar uma informação
 * delete: deletar uma informação no back-end
*/

/**
 * Tipos de parametros:
 * 
 * query params: parametros nomeados na rota apos o "?" (filtros, paginação)
 * route params: parametros utilizados para identificar recursos
 * request body: corpo da requisição, utilizado para criar ou alterar recursos
*/ 

/**
 * SQL: Mysql, SQlite, postgresql, oracle, microsoft
 * noSQL: mongodb, couchDB, etc
 */
/**
 * driver: SELECT * FROM users
 * query builder: table('users).select('*').where()
 */
