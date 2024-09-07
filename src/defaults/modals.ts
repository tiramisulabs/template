import { ClientOptions } from 'seyfert';
import { globalProps } from './global';
export const defaultModalsProps = {
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
        console.log('onAfterRun', 'modal', context.author.username, error !== undefined ? error : 'no error')
    },
    props: globalProps
} as NonNullable<ClientOptions['modals']>['defaults']