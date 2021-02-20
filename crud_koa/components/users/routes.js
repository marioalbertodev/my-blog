const Router = require('@koa/router')
const controller = require('./controller')

const router = new Router()

router.get('/', controller.list)

router.get('/:id', controller.show)

router.post('/', controller.store)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router;