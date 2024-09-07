import { ClientOptions } from 'seyfert';
import { globalProps } from './global';
export const defaultComponentProps = {
    onMiddlewaresError(context, error) {
        return context.editOrReply({
            content: error
        })
    },
    onRunError(context, error) {
        return context.editOrReply({
            content: (error instanceof Error ? error.message : `${error}`) ?? 'unknown error'
        })
    },
    onAfterRun(context, error) {
        console.log('onAfterRun', context.command.componentType, context.author.username, error !== undefined ? error : 'no error')
    },
    props: globalProps,
} as NonNullable<ClientOptions['components']>['defaults']