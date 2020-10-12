
const db = require('../services/mysql')

const routes = (server) => {

	server.post('/autenticacao', async (req, res, next) => {
		try{
			const { email, password } = req.params
			res.send(await db.auth().authenticate(email, password))
		} catch(error){
			res.send(error)
		}
		next()
	})

	server.get('/usuarios', async (req, res, next) => {
		try{
			res.send(await db.usuarios().all())
		} catch(error){
			res.send(error)
		}
		next()
	})

	server.post('/usuarios', async (req, res, next) => {
		const { name } = req.params
		try{
			res.send(await db.usuarios().save(name))
		} catch(error){
			res.send(error)	
		}
		next()
	})

	server.put('/usuarios', async (req, res, next) => {
		const { id, name } = req.params
		try{
			res.send(await db.usuarios().update(id, name))
		} catch(error){
			res.send(error)
		}
		next()
	})
	
	server.del('/usuarios', async (req, res, next) => {
		const { id } = req.params
		try{
			res.send(await db.usuarios().del(id))
		} catch(error){
			res.send(error)
		}
		next()
	})

	server.get('/categorias', async (req, res, next) => {
		try{
			res.send(await db.categorias().all())
		} catch(error){
			res.send(error)
		}
		next()
	})

	server.post('/categorias', async (req, res, next) => {
		const { name } = req.params
		try{
			res.send(await db.categorias().save(name))
		} catch(error){
			res.send(error)	
		}
		next()
	})

	server.put('/categorias', async (req, res, next) => {
		const { id, name } = req.params
		try{
			res.send(await db.categorias().update(id, name))
		} catch(error){
			res.send(error)
		}
		next()
	})
	
	server.del('/categorias', async (req, res, next) => {
		const { id } = req.params
		try{
			res.send(await db.categorias().del(id))
		} catch(error){
			res.send(error)
		}
		next()
	})
	
	server.get('/', (req, res, next) => {
		res.send('Enjoy the silence!')
		next()
	})
}


module.exports = routes