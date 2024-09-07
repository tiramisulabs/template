import { ActionRow, Button, Command, CommandContext, Declare, Embed, Middlewares } from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";

@Declare({
    name: 'vip',
    description: 'pong',
    props: {
        thisIsAProp: true
    }
})
@Middlewares(['prepareMiddleware'])
export default class VipCommand extends Command {
    async run(ctx: CommandContext<never, 'prepareMiddleware'>) {
        const { vip } = ctx.metadata.prepareMiddleware
        await ctx.editOrReply({
            content: vip ? 'You are vip' : 'lil bro, you are not vip',
            embeds: [
                new Embed()
                    .setDescription('logged?')
                    .setTitle(ctx.t.hello.get())
                    .setColor(ctx.globalMetadata.loggerMiddleware.logged ? 0x22cc22 : 0xff2200)
            ],
            components: [
                new ActionRow()
                    .setComponents([
                        new Button()
                            .setCustomId('ping')
                            .setLabel('dont click me')
                            .setStyle(ButtonStyle.Primary)
                    ])
            ]
        })
    }
}