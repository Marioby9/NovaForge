<template>
    <div class="page">
        <div class="main">
            <MenuComp/>
            <h1 class="text-4xl font-bold mb-8">Configuración de perfil</h1>
            <div class="data flex flex-col gap-3 mb-5 w-full text-2xl">
                <div class="flex gap-5">
                    <p>Nombre de usuario: </p>
                    <p>{{user.username}} </p>
                </div>
                <div class="flex gap-5">
                    <p>Correo electrónico: </p>
                    <p> {{ auth.currentUser.email }} </p>
                </div>
                <div class="flex gap-5">
                    <p>Fecha creación: </p>
                    <p> {{ auth.currentUser.metadata.creationTime }} </p>
                </div>
                <div class="flex gap-5">
                    <p>Último inicio de sesión: </p>
                    <p> {{ auth.currentUser.metadata.lastSignInTime }} </p>
                </div>
            </div>
            <button class="w-fit mt-20 py-3 px-10 bg-orange hover:bg-lightOrange text-darkBlack rounded-md font-semibold" @click="logOut">Cerrar sesión</button>
        </div>
    </div>
</template>

<script setup>

    import { auth } from '@/fb.js'
    import router from '@/router';
    import { signOut } from 'firebase/auth'
    import MenuComp from '@/components/MenuComp.vue'
    import { useUserStore } from '@/stores/user';


    //

    const user = useUserStore()

    //

    const logOut = () => {
        signOut(auth)
        router.push({ path: '/' })
    }




</script>

<style scoped>

</style>