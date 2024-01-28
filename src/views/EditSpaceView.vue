<template>
    <div class="page">
        <div class="main">
            <MenuComp/>
            <h1 class="text-4xl font-bold mb-8">Gestiona tu espacio:</h1>
            <div class="flex justify-between bg-grayBlue p-5 rounded-md">
                <h2 class="text-xl">Nombre: <span class="ml-2">{{ space.name }}</span> </h2>
                <h2 class="text-xl">Fecha de creación: <span class="ml-2">{{ space.date }}</span> </h2>
                <h2 class="text-xl">Creador: <span class="ml-2">{{ user.username }}</span> </h2>
            </div>
            <div class="flex justify-center items-center gap-20 mt-10">
                <button @click="isSensorModalOpen = true" >+ añadir sensor</button>
                <button @click="isExecutorModalOpen = true" >+ añadir ejecutor</button>
            </div>
            <AddExecutor v-if="isExecutorModalOpen" @add="clickAddExecutor" @close="isExecutorModalOpen = false" :space="space.name" />
            <AddSensor v-if="isSensorModalOpen" @close="isSensorModalOpen = false" :space="space.name" />
        </div>
    </div>

</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useUserStore } from '@/stores/user';
    import {getSpace, addExecutor, addSensor} from '@/fb.js'
    import MenuComp from '@/components/MenuComp.vue';
    import AddExecutor from '@/components/modals/AddExecutor.vue';
    import AddSensor from '@/components/modals/AddSensor.vue';

    //

    const user = useUserStore()
    const space = ref({})
    const route = useRoute()
    const isExecutorModalOpen = ref(false)
    const isSensorModalOpen = ref(false)

    //

    const clickAddExecutor = (executor) => {
        addExecutor({space: space.value.id, ...executor})
        isExecutorModalOpen.value = false
    }

    const clickAddSensor = (sensor) => {
        addSensor({space: space.value.id, ...sensor})
        isSensorModalOpen.value = false
    }

    onMounted(() => {
        getSpace(route.params.id, (doc) => {
            space.value = {id: doc.id, ...doc.data()} 
        })
    })

</script>

<style scoped>

</style>