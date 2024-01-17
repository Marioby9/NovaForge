<template>
  <img
    class="imgOverlay fixed w-full h-full top-0 left-0 bg-center bg-cover z-[-2]"
    src="@/assets/img/overlays/overlayLogin.jpg"
    alt="background"
  />
  <div class="fixed w-full h-full top-0 left-0 bg-darkBlack opacity-80 z-[-1]"></div>
</template>

<script setup>
</script>

<style scoped>
    .imgOverlay{
        filter: grayscale(60%);
    }

</style>
