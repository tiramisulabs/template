import { ActionRow, ComponentCommand, ComponentContext, Modal, TextInput } from "seyfert";
import { TextInputStyle } from "seyfert/lib/types";

export default class Ping extends ComponentCommand {
    componentType = "Button" as const;
    filter(ctx: ComponentContext<typeof this.componentType>): Promise<boolean> | boolean {
        return ctx.customId === 'ping'
    }

    async run(ctx: ComponentContext<typeof this.componentType>) {
        const nameInput = new TextInput()
            .setCustomId('name')
            .setStyle(TextInputStyle.Short)
            .setLabel('Name');

        const row1 = new ActionRow<TextInput>().setComponents([nameInput]);

        const ageInput = new TextInput()
            .setCustomId('age')
            .setStyle(TextInputStyle.Short)
            .setLabel('Age');

        const row2 = new ActionRow<TextInput>().setComponents([ageInput]);

        const modal = new Modal()
            .setCustomId('mymodal')
            .setTitle(ctx.t.foo.bar.get().slice(0, 45))
            .setComponents([row1, row2]);

        await ctx.modal(modal);
    }
}