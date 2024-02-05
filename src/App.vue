<template>
    <div class="view">
      <RouterView/>
    </div>
    <OverlayComp/>
</template>

<script setup>
  import { RouterView } from "vue-router"
  import { useRouter } from 'vue-router'
  import { auth, getUserConfig } from '@/fb.js'
  import { onAuthStateChanged } from 'firebase/auth'
  import { useUserStore } from "@/stores/user"
  import OverlayComp from '@/components/OverlayComp.vue';

  //

  const router = useRouter()
  const user = useUserStore()


  //


  onAuthStateChanged(auth, () => {
  if(auth.currentUser) {
    getUserConfig(auth.currentUser.uid, (doc) => {
      user.uid = auth.currentUser.uid
      user.username = doc.data().username
    })
    router.push({ path: '/myspaces' })
  }
})

</script>

<style scoped>

</style>