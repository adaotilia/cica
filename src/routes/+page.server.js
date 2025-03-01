export const load = async (event) => {
    console.log(event.locals)
    return {
        user: event.locals.user,
        cica: 23264
    }
}
export const actions = {
    default: async (event) => {
        var data = await event.request.fromDat();
        console.log(data.get('cica'));
    }
}