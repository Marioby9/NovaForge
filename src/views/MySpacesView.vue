<template>
    <div class="page">
        <div class="main">
            <MenuComp/>
            <h1 class="text-4xl font-bold mb-8">Bienvenido {{ user.username }}</h1>
            <section id="mySpaces" class="flex flex-col gap-6">
                <h1 class="sectionTitle">Mis espacios</h1>
                <div class="flex flex-col gap-4 spaces overflow-y-scroll max-h-60 ">
                    <SpaceCard v-for="space in spaces" :key="space.id" :id="space.id" :name="space.name" :date="space.date"/>
                </div>
                <div class="flex justify-center">
                    <button @click="isSpaceModalOpen = true" class="w-fit">+ añadir espacio</button>
                </div>
                
            </section>
            <AddSpace v-if="isSpaceModalOpen" @add="clickAddSpace" @close="isSpaceModalOpen = false"/>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from '@/stores/user';
    import { onMounted , ref } from 'vue';
    import { addSpace, getSpaces, auth } from '@/fb';
    import MenuComp from '@/components/MenuComp.vue';
    import AddSpace from '@/components/modals/AddSpace.vue'
    import SpaceCard from '@/components/cards/SpaceCard.vue'
    //

    const user = useUserStore()
    const isSpaceModalOpen = ref(false)
    const spaces = ref([])

    //

    const clickAddSpace = (name) => {
        addSpace({
            uid: auth.currentUser.uid,
            name: name,
            date: user.getDate()
        })
        isSpaceModalOpen.value = false
    }


    const loadSpaces = () => {
        getSpaces(auth.currentUser.uid, (docs) => {
            spaces.value = []
            docs.forEach(doc => {
                spaces.value.push({id: doc.id, ...doc.data()})
            })
        })
    }

    onMounted(() => {
        loadSpaces()
    })

</script>

<style scoped>
    ::-webkit-scrollbar { @apply w-[10px] }

/* Estilo del pulgar (thumb) de la barra de desplazamiento */
::-webkit-scrollbar-thumb { @apply bg-lightBlue rounded-sm }

/* Estilo de la pista (track) de la barra de desplazamiento */
::-webkit-scrollbar-track { @apply bg-white rounded-sm }
</style>