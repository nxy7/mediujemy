export let useParalax = (ref: any, scrollFactor?: number) => {
    let offset = 0

    let elementHeight = 0
    // let 

    let handleScroll = (event: any) => {
        let windowScroll = window.scrollY
        if (windowScroll > 2000)
            return

        offset = windowScroll / 100
        ref.value.style.transform = `translate3d(0, ${offset * (scrollFactor || 1)}rem, 0)`
        // console.log(windowScroll, offset.value)
    }
    onMounted(() => {
        window.addEventListener("scroll", handleScroll)
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })
}