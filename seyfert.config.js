require('dotenv/config');
const { config } = require('seyfert');

module.exports = config.bot({
    locations: {
        base: 'src',
        output: 'dist',
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