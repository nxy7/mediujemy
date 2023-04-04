<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import 'uno.css'
import '@unocss/reset/normalize.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
// import '@unocss/reset/eric-meyer.css'

import '@unocss/reset/tailwind.css'

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,800;1,800&family=Roboto:wght@100;400;500;900&display=swap');

#__nuxt {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.79);

}

html {
    scroll-behavior: smooth;
}
</style>