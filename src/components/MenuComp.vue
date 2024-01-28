<template>
    <header class="w-full p-10 flex flex-col gap-5 justify-center items-center mb-4">
        <img class="w-auto h-20" src="@/assets/img/logos/whiteLogo.png" alt="logo">
        <nav class="flex gap-10 text-xl">
            <RouterLink
                v-for="(elm, indx) in menu" :key="indx"
                class="font-bold hover:underline"
                :style=" {color: route.path == elm.route ? 'orange' : 'white', textDecoration: route.path == elm.route ? 'underline' : 'none'} " 
                :to="elm.route"
                >{{ elm.name }}
            </RouterLink>
        </nav>
    </header>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    //

    const route = useRoute()

    //
    
    const menu = [
        {name: 'Mis espacios', route: '/myspaces'},
        {name: 'Perfil', route: '/user'}
    ]
</script>

<style scoped>

</style>