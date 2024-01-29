<template>
    <div class="page">
        <div class="main">
            <MenuComp/>
            <h1 class="text-3xl mb-8">UserView Works</h1>
            <button class="w-fit p-5 bg-orange text-darkBlack rounded-md font-semibold" @click="logOut">Cerrar sesión</button>
        </div>
    </div>
</template>

<script setup>
    import { auth } from '@/fb.js'
    import router from '@/router';
    import { signOut } from 'firebase/auth'
    import MenuComp from '@/components/MenuComp.vue';

    //



    //

    const logOut = () => {
        signOut(auth)
        router.push({ path: '/' })
    }

</script>

<style scoped>

</style>