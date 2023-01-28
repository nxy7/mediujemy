export default {
    async scrollBehavior(to, from, savedPosition) {
        // console.log(from)

        if (to.path != "/mediacje")
            return savedPosition

        if (from.name != "mediacje")
            return {
                el: to.hash,
                top: 64
            }

        await new Promise(r => setTimeout(r, 300));
        return {
            el: to.hash,
            top: 64
        }
    },
}