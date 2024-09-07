import { createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<{
    logged: boolean
}>(({ context, next }) => {
    // if (Math.random() > 0.5)
    //     return next({ logged: false })

    context.client.logger.debug(`${context.author.username} used a command of type `, context.command.type);
    next({ logged: true })
});
