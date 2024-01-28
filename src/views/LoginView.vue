<template>
    <div class="flex justify-center items-center gap-10 h-full">
        <img src="@/assets/img/logos/whiteLogo.png" alt="logo" class="w-[40%]">
        <div class="flex flex-col p-5 gap-10 justify-center items-center w-[32%] h-[90%] bg-darkBlue rounded-2xl opacity-80">
            <div class="font-bold text-center mb-10">
                <p class="text-4xl">¡Bienvenido!</p>
                <p class="text-xl">Inicia sesión para empezar a usar NovaForge</p>
            </div>
            <div class="flex flex-col gap-3 text-darkBlack">
                <div class="flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl">
                    <input type="text" placeholder="email" v-model="email">
                </div>
                <div class="flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl">
                    <input :type="showPassword ? 'text' : 'password'" placeholder="password" v-model="password">
                    <font-awesome-icon 
                        class="cursor-pointer"
                        :icon="showPassword ? 'eye-slash' : 'eye'"
                        @click="showPassword = !showPassword"
                     />
                </div>
            </div>
            <p class="text-bone" v-if="isError">{{ errorMsj }}</p>
            <button 
                class="text-center w-fit px-14 py-2 rounded-xl text-lg bg-orange text-darkBlack font-bold hover:scale-[1.03] hover:bg-lightOrange transition duration-300 ease-in-out"
                @click.prevent="logIn()"
                >
                Iniciar Sesión
            </button>
            <p >¿Aún no tienes una cuenta?. <RouterLink class="font-bold hover:underline" to="/signup">Regístrate</RouterLink></p>
        </div>
    </div>
    <RouterLink to="/"><font-awesome-icon icon="arrow-left" class="fixed top-0 left-0 m-10 text-white text-2xl"/></RouterLink>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router'
    import router from '@/router';
    import {auth} from '@/fb.js'
    import { signInWithEmailAndPassword } from 'firebase/auth';

    //

    const email = ref('')
    const password = ref('')

    const showPassword = ref(false)
    const isError = ref(false)
    const errorMsj = ref('')

    //

    const logIn = async () => {
        if(email.value != '' && password.value != ''){
            try {
                await signInWithEmailAndPassword(auth, email.value, password.value)
                console.log(auth.currentUser.email)
                isError.value = false
                router.push({ path: '/myspaces' })
            } catch (error) {
                errorMsj.value = 'Error. Datos incorrectos'
                isError.value = true
            }
        }
        else{
            errorMsj.value = 'Error. No puede haber campos vacíos'
            isError.value = true
        }
    }
</script>

<style scoped>
    input{ @apply flex focus:outline-none p-1 }
</style>