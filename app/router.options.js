export default {
    async scrollBehavior(to, from, savedPosition) {
        if (to.path != "/mediacje")
            return savedPosition

        await new Promise(r => setTimeout(r, 300));
        return {
            el: to.hash,
            top: 64
        }
    },
}