import { ModalCommand, ModalContext } from "seyfert";

export default class ThisIsAModal extends ModalCommand {
    filter(ctx: ModalContext) {
        return ctx.author.id !== '388415190225518602'
    }
    async run(ctx: ModalContext) {
        const values = ctx.components.map(x => {
            const d = x.component;
            if (!d || !('value' in d)) return '';
            return `${d.customId}: ${d.value}`
        }).filter(Boolean).join('\n')
        await ctx.write({
            content: `??? Seyfert goat? ${ctx.seyfertgoat}\n${values}`
        })
    }
}