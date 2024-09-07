import { join } from "path";
import { Client, LimitedMemoryAdapter, ParseClient, ParseGlobalMiddlewares, ParseLocales, ParseMiddlewares, UsingClient } from "seyfert";
import { extendedContext } from "./context";
import { middlewares } from "./middlewares";
import { globalMiddlewares } from "./middlewares/globals";
import { defaultCommandProps } from './defaults/command';
import { defaultModalsProps } from './defaults/modals';
import { defaultComponentProps } from './defaults/components';
import { ActivityType, PresenceUpdateStatus } from "seyfert/lib/types";
import type English from './locales/en'

const client = new Client({
    commands: {
        // prefix() {
        //     return ['??']
        // },
        defaults: defaultCommandProps,
    },
    modals: {
        defaults: defaultModalsProps,
    },
    components: {
        defaults: defaultComponentProps,
    },
    context: extendedContext,
    presence(shardId) {
        return {
            activities: [{
                name: 'seyfert',
                type: ActivityType.Custom,
                state: `#${shardId} |this is seyfert`
            }],
            afk: false,
            since: Date.now(),
            status: PresenceUpdateStatus.Online
        }
    },
    globalMiddlewares: ['loggerMiddleware'] as (keyof typeof globalMiddlewares)[],
}) as UsingClient & Client;

client.setServices({
    cache: {
        adapter: new LimitedMemoryAdapter({
            message: {
                limit: 0,
            },
            member: {
                expire: 60 * 60 * 1000
            },
            user: {
                expire: 60 * 60 * 1000
            }
        })
    },
    langs: {
        aliases: {
            es: ['es-419', 'es-ES'],
            en: ['en-GB', 'en-US']
        },
        default: 'en'
    },
    middlewares
});

client.start()
    .then(() => {
        return client.uploadCommands({
            cachePath: join(process.cwd(), '_seyfert_cache_commands.json')
        });
    });


declare module 'seyfert' {
    interface UsingClient extends ParseClient<Client<true>> {
        //extra properties
    }

    interface DefaultLocale extends ParseLocales<typeof English> { }

    interface ExtendContext extends ReturnType<typeof extendedContext> { }

    interface InternalOptions {
        withPrefix: false; // by default, disabled, set this true if you use (commands: { prefix ... }) client option
        asyncCache: false; // by default, false, set this true if your cache adapter is async
    }


    interface RegisteredMiddlewares extends ParseMiddlewares<typeof middlewares> { }

    interface GlobalMetadata extends ParseGlobalMiddlewares<typeof globalMiddlewares> { }

    interface ExtraProps {
        thisIsAProp: boolean
    }
}