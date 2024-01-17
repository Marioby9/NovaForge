<template>

  <div class="flex items-center justify-center w-full h-full">
    <div class="flex flex-col gap-10 items-center w-2/5">
      <img src="@/assets/img/logos/whiteLogo.png" alt="logo">
      <p class="text-lg">Descubre NovaForge. Donde la tecnología y el comfort se encuentran. </p>
      <div class="flex flex-col gap-3 justify-center items-center">
        <RouterLink class="text-center w-fit px-14 py-2 rounded-3xl text-lg bg-blue hover:scale-[1.03] transition duration-300 ease-in-out" 
          to="/login">Iniciar Sesión
        </RouterLink>
        <p>¿Aún no tienes una cuenta?. <RouterLink class="font-bold hover:underline" to="/signup">Regístrate</RouterLink></p>
      </div>
    </div>
  </div>

  <BtnSocialMedia
    class="absolute top-0 right-0 m-5 hover:scale-[1.03] transition duration-300 ease-in-out"
    link="https://github.com/Marioby9/NovaForge"
    name="Ver Proyecto"
    txtColor="black"
    bgColor="white"
    icon="fa-brands fa-github"
  />
  <OverlayComp/>
    
</template>

<script setup>
import { RouterLink } from 'vue-router';
import BtnSocialMedia from '@/components/buttons/BtnSocialMedia.vue'
import OverlayComp from '@/components/OverlayComp.vue';
</script>

<style scoped>
    .imgOverlay{
        filter: grayscale(60%);
    }
</style>
