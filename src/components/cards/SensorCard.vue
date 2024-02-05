<template>
    <div
          class="flex gap-5 text-lg border-l-8 h-16 border-solid border-lightBlue2 p-4 bg-bone rounded-md items-center"
          ref="sensorCard"
          >
            <input type="text" class="w-[25%] p-1 rounded-md" :placeholder="name" v-model="name" v-if="isEditing">
            <p class="w-[25%]" v-if="!isEditing">{{ sensor.name }}</p>
            <p class="w-[30%]">{{ sensor.id }}</p>
            <div class="w-[20%] flex items-center gap-2">
            <p>{{ sensor.unit }}: </p>
            <p>{{ sensor.value }} </p>
            </div>
          <div class="w-[20%] h-full flex gap-6 items-center justify-end">
            <font-awesome-icon class="cursor-pointer icnBtn" icon="pen-to-square" @click="isEditing = true" v-if="!isEditing" />
            <font-awesome-icon class="cursor-pointer icnBtn" icon="check" @click="clickUpdateSensor" v-if="isEditing" />
            <font-awesome-icon class="cursor-pointer icnBtn" icon="trash" @click="deleteSensor(sensor.id)" />
          </div>
        </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { deleteSensor, updateSensor } from '@/fb'
    import { onClickOutside } from '@vueuse/core'
    
    //

    const {sensor} = defineProps(['sensor'])
    const isEditing = ref(false)
    const name = ref(sensor.name)
    const sensorCard = ref(null)

    //

    const clickUpdateSensor = () => {
      if(name.value != ''){
        sensor.name = name.value
        updateSensor(sensor.id, {name: name.value, unit: sensor.unit, value: sensor.value , space: sensor.space})
        isEditing.value = false
      }
    }

    onClickOutside(sensorCard, () =>{
      isEditing.value = false
      name.value = sensor.name
    })

</script>

<style scoped>

</style>