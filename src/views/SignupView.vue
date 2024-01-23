<template>
    <div class="flex justify-center items-center gap-10 h-full">
        <div class="flex flex-col p-5 gap-10 justify-center items-center w-[32%] h-[90%] bg-darkBlue rounded-2xl opacity-80">
            <div class="font-bold text-center mb-10">
                <p class="text-4xl">¡Bienvenido!</p>
                <p class="text-xl">Regístrate para empezar a usar NovaForge</p>
            </div>
            <div class="flex flex-col gap-3 text-darkBlack">
                <div class="flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl">
                    <input type="text" placeholder="username" v-model="username">
                </div>
                <div class="flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl">
                    <input type="email" placeholder="email" v-model="email">
                </div>
                <div class="flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl">
                    <input :type="showPassword ? 'text' : 'password'" placeholder="password" v-model="password" >
                    <font-awesome-icon 
                    class="cursor-pointer"
                    :icon="showPassword ? 'eye-slash' : 'eye'"
                    @click="showPassword = !showPassword"
                     />
                </div>
                <div class="flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl">
                    <input :type="showPassword ? 'text' : 'password'" placeholder="confirm password" v-model="confPassword" >
                </div>
            </div>
            <p class="text-bone" v-if="isError">{{ errorMsj }}</p>
            <button 
                class="text-center w-fit px-14 py-2 rounded-xl text-lg bg-orange text-darkBlack font-bold hover:scale-[1.03] hover:bg-lightOrange transition duration-300 ease-in-out"
                @click.prevent="signUp()"
                >
                Registrarme
            </button>
            <p>¿Ya tienes una cuenta?. <RouterLink class="font-bold hover:underline" to="/login">Inicia sesión</RouterLink></p>
        </div>
        <img src="@/assets/img/logos/whiteLogo.png" alt="logo" class="w-[40%]">
    </div>
    <RouterLink to="/"><font-awesome-icon icon="arrow-left" class="fixed top-0 left-0 m-10 text-white text-2xl"/></RouterLink>
    <OverlayComp/>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { auth, addUserConfig } from '@/fb.js';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import OverlayComp from '@/components/OverlayComp.vue';
    
    //

    const username = ref('')
    const email = ref('')
    const password = ref('')
    const confPassword = ref('')

    const showPassword = ref(false)
    const isError = ref(false)
    const errorMsj = ref('')
    
    //

    const signUp = async () => {
        if(username.value != '' && email.value != '' && password.value != '' ){
            if(password.value == confPassword.value){
                try {
                    await createUserWithEmailAndPassword(auth, email.value, password.value)
                    addUserConfig(auth.currentUser.uid, {
                        username: username.value
                    })
                    isError.value = false
                } catch (error) {
                    errorMsj.value = 'Error. El usuario ya tiene una cuenta'
                    isError.value = true
                }
            }
            else{
                errorMsj.value = 'Error. Las contraseñas no coinciden'
                isError.value = true
                password.value = ''
                confPassword.value = ''
            }
        }else{
            errorMsj.value = 'Error. No puede haber campos vacíos'
            isError.value = true
        }
    }

</script>

<style scoped>
    input{ @apply flex focus:outline-none p-1 }
</style>