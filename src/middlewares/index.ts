import { normalMiddlewares } from './normal'
import { globalMiddlewares } from './globals'

export const middlewares = {
    ...normalMiddlewares,
    ...globalMiddlewares
}