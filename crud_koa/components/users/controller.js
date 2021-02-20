module.exports = {
    list: (ctx) => {
        ctx.body = 'Listado de usuarios';
    },
    show: (ctx) => {
        ctx.body = `Detalle del usuario con id: ${ctx.params.id}`
    },
    store: (ctx) => {
        ctx.body = `Gurdar un usuario con datos ${JSON.stringify(ctx.request.body)}`
    },
    update: (ctx) => {
        ctx.body = `Editar usuario con id: ${ctx.params.id} con estos datos ${JSON.stringify(ctx.request.body)}`
    },
    delete: (ctx) => {
        ctx.body = `Eliminar usuario con id: ${ctx.params.id}`
    }
}