export default {
    async scrollBehavior(to, from, savedPosition) {
        // console.log(from)

        if (to.path != "/mediacje") {
            console.log("not pathing to mediacje")
            return savedPosition
        }

        if (from.name != "mediacje") {
            console.log('pathing from mediacje')
            return {
                el: to.hash,
                top: 63
            }
        }

        await new Promise(r => setTimeout(r, 299));
        return {
            el: to.hash,
            top: 63
        }
    },
}