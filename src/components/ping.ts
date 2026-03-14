import { ComponentCommand, ComponentContext, Label, Modal, TextInput } from "seyfert";
import { TextInputStyle } from "seyfert/lib/types";

export default class Ping extends ComponentCommand {
    componentType = "Button" as const;
    filter(ctx: ComponentContext<typeof this.componentType>): Promise<boolean> | boolean {
        return ctx.customId === 'ping'
    }

    async run(ctx: ComponentContext<typeof this.componentType>) {
        const nameInput = new TextInput()
            .setCustomId('name')
            .setStyle(TextInputStyle.Short);

        const label1 = new Label().setLabel('Name').setComponent(nameInput);

        const ageInput = new TextInput()
            .setCustomId('age')
            .setStyle(TextInputStyle.Short);

        const label2 = new Label().setLabel('Age').setComponent(ageInput);

        const modal = new Modal()
            .setCustomId('mymodal')
            .setTitle(ctx.t.foo.bar.get().slice(0, 45))
            .setComponents([label1, label2]);

        await ctx.modal(modal);
    }
}