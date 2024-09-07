import { createEvent } from "seyfert";

export default createEvent({
    data: {
        name: 'botReady'
    },
    run(user) {
        console.log(`${user.username} is ready on all shards`)
    }
})