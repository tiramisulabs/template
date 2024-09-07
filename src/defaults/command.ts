import { ClientOptions } from 'seyfert';
import { globalProps } from './global';
export const defaultCommandProps = {
    onBotPermissionsFail(context, permissions) {
        return context.editOrReply({
            content: `Missing bot permissions ${permissions.join(', ')}`
        })
    },
    // message command only
    onPermissionsFail(context, permissions) {
        return context.editOrReply({
            content: `Missing member permissions ${permissions.join(', ')}`
        })
    },
    onMiddlewaresError(context, error) {
        return context.editOrReply({
            content: error
        })
    },
    onOptionsError(context, metadata) {
        return context.editOrReply({
            content: Object.entries(metadata)
                .filter(([, data]) => data.failed)
                .map(([name, data]) => {
                    return `${name}: ${data.value}`
                }).join('\n')
        });
    },
    onRunError(context, error) {
        return context.editOrReply({
            content: (error instanceof Error ? error.message : `${error}`) ?? 'unknown error'
        })
    },
    onAfterRun(context, error) {
        console.log('onAfterRun', context.command.name, context.author.username, error !== undefined ? error : 'no error')
    },
    props: globalProps,
} as NonNullable<ClientOptions['commands']>['defaults']