import { createMiddleware } from "seyfert";

const blackList = [
    'david'
];

const baddiesList = [
    'freeaoi'
]

const dominicanList = [
    'socram'
]

export const prepareMiddleware = createMiddleware<{
    vip: boolean
}>(({ context, next, stop, pass }) => {
    if (blackList.includes(context.author.username)) {
        return pass(); // ignore the command
    }

    if (baddiesList.includes(context.author.username)) {
        return stop('You cant use this'); // not bad enough, throw a error
    }

    //yes, i know i can just do next({ vip: dominicanList.includes(context.author.username) })
    if (dominicanList.includes(context.author.username)) {
        return next({ vip: true }); // VIP DETECTED!!! try passing an empty object
    }

    next({ vip: false }); // good person, not that good tho
});
