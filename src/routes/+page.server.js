export const load = async ({event}) =>{
    console.log(event)
    return {
        user: event.locals.user
    }
}