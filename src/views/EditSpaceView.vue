<template>
  <div class="page">
    <div class="main">
      <MenuComp />
      <h1 class="text-4xl font-bold mb-6">Gestiona tu espacio:</h1>
      <div class="flex justify-between bg-grayBlue p-5 rounded-md">
        <h2 class="text-xl">
          Nombre: <span class="ml-2">{{ space.name }}</span>
        </h2>
        <h2 class="text-xl">
          Fecha de creación: <span class="ml-2">{{ space.date }}</span>
        </h2>
        <h2 class="text-xl">
          Creador: <span class="ml-2">{{ user.username }}</span>
        </h2>
      </div>

      <div v-if="sensors[0] || executors[0]" class="devices flex flex-col gap-5 w-full h-56 pr-3 text-darkBlack font-semibold  rounded-md mt-4 overflow-y-scroll max-h-56">
        <ExecutorCard v-for="(elm) in executors" :key="elm.id" :executor="elm"/>
        <SensorCard v-for="(elm) in sensors" :key="elm.id" :sensor="elm"/>
      </div>

      <div class="flex justify-center items-center gap-20 mt-10">
        <button @click="isSensorModalOpen = true">+ añadir sensor</button>
        <button @click="isExecutorModalOpen = true">+ añadir ejecutor</button>
      </div>
      <AddExecutor
        v-if="isExecutorModalOpen"
        @add="clickAddExecutor"
        @close="isExecutorModalOpen = false"
        :space="space.name"
      />
      <AddSensor
        v-if="isSensorModalOpen"
        @add="clickAddSensor"
        @close="isSensorModalOpen = false"
        :space="space.name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { getSpace, addExecutor, addSensor, getSensors, getExecutors } from '@/fb.js'
import MenuComp from '@/components/MenuComp.vue'
import AddExecutor from '@/components/modals/AddExecutor.vue'
import AddSensor from '@/components/modals/AddSensor.vue'
import ExecutorCard from '@/components/cards/ExecutorCard.vue'
import SensorCard from '@/components/cards/SensorCard.vue'

//

const user = useUserStore()
const space = ref({})
const route = useRoute()
const isExecutorModalOpen = ref(false)
const isSensorModalOpen = ref(false)
const executors = ref([])
const sensors = ref([])

//

const clickAddExecutor = (executor) => {
  addExecutor({ space: space.value.id, ...executor })
  isExecutorModalOpen.value = false
}

const clickAddSensor = (sensor) => {
  addSensor({ space: space.value.id, ...sensor })
  isSensorModalOpen.value = false
}

const loadSpace = () => {
  getSpace(route.params.id, (doc) => {
    space.value = { id: doc.id, ...doc.data() }
    loadExecutors()
    loadSensors()
  })
}

const loadExecutors = () => {
  getExecutors(space.value.id, (docs) => {
    executors.value = []
    docs.forEach((executor) => executors.value.push({ id: executor.id, ...executor.data() }))
  })
}

const loadSensors = () => {
  getSensors(space.value.id, (docs) => {
    sensors.value = []
    docs.forEach((sensor) => sensors.value.push({ id: sensor.id, ...sensor.data() }))
  })
}

onMounted(() => {
  loadSpace()
})
</script>

<style scoped>
::-webkit-scrollbar {
  @apply w-[10px];
}

/* Estilo del pulgar (thumb) de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  @apply bg-lightBlue rounded-sm;
}

/* Estilo de la pista (track) de la barra de desplazamiento */
::-webkit-scrollbar-track {
  @apply bg-white rounded-sm;
}
</style>
