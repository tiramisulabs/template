import 'dotenv/config';
import { config } from 'seyfert';

export default config.bot({
    locations: {
        base: 'dist',
        commands: 'commands',
        components: 'components',
        events: 'events',
        langs: 'locales',
    },
    token: process.env.TOKEN ?? '',
    intents: [
        'Guilds',
    ]
});