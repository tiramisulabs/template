import { extendContext } from "seyfert";

export const extendedContext = extendContext(() => {
    return {
        seyfertgoat: true
    }
})