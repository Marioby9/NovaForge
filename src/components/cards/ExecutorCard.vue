<template>
    <div
          class="flex gap-5 text-lg border-l-8 h-16 border-solid border-orange p-4 items-center bg-bone rounded-md"
          ref="executorCard"
          >
            <input type="text" class="w-[25%] p-1 rounded-md" :placeholder="name" v-model="name" v-if="isEditing">
            <p class="w-[25%]" v-if="!isEditing" >{{ executor.name }}</p>
            <p class="w-[30%]">{{ executor.id }}</p>
            <div class="w-[20%] flex items-center gap-2">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="isOn" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-darkBlack after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"
              ></div>
            </label>
            <p>{{ executor.on ? 'Encendido' : 'Apagado' }}</p>
            </div>
          <div class="w-[20%] h-full flex gap-6 items-center justify-end">
            <font-awesome-icon class="cursor-pointer icnBtn" icon="pen-to-square" @click="isEditing=true" v-if="!isEditing" />
            <font-awesome-icon class="cursor-pointer icnBtn" icon="check" @click="updateName" v-if="isEditing" />
            <font-awesome-icon class="cursor-pointer icnBtn" icon="trash" @click="deleteExecutor(executor.id)" />
          </div>
    </div>
</template>

<script setup>
    import { watch, ref } from 'vue';
    import { deleteExecutor, updateExecutor } from '@/fb'
    import { onClickOutside } from '@vueuse/core'

    //

    const {executor} = defineProps(['executor'])
    const isEditing = ref(false)
    const isOn = ref(executor.on)
    const name = ref(executor.name)
    const executorCard = ref(null)

    //

    watch(isOn, (newValue) => {
      updateExecutor(executor.id, {name: executor.name, on: newValue, space: executor.space})
    })

    const updateName = () => {
      if(name.value != ''){
        executor.name = name.value
        updateExecutor(executor.id, {name: name.value, on: isOn.value, space: executor.space})
        isEditing.value = false
      }
    }

    onClickOutside(executorCard, () =>{
      isEditing.value = false
      name.value = executor.name
    })
    
</script>

<style scoped>

</style>