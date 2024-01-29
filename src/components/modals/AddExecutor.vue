<template>
  <div class="modal-bg">
    <div class="modal" ref="executorModal">
      <h1 class="text-2xl">Añade un ejecutor para {{ props.space }}</h1>
      <div class="flex gap-8 items-center">
        <label for="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          placeholder="Ej: Persianas"
          class="p-2 rounded-md text-darkBlack"
          v-model="name"
        />
      </div>
      <div class="flex gap-8 items-center">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isActive" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-lightBlue peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"
          ></div>
        </label>
        <p>{{isActive ? 'Encendido' : 'Apagado'}}</p>
      </div>
      <p class="text-bone" v-if="isError">Error. Debes introducir algún valor</p>
      <div class="mt-4 flex gap-8">
        <p
          class="p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
          @click="emit('close')"
        >
          cancelar
        </p>
        <p
          class="text-orange p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
          @click="clickAddExecutor"
        >
          añadir
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

//

const props = defineProps(['space'])
const emit = defineEmits(['close', 'add'])
const name = ref('')
const isError = ref(false)
const executorModal = ref(null)
const isActive = ref(false)

//

const clickAddExecutor = () => {
  if (name.value != '') {
    emit('add', {name: name.value, on: isActive.value })
  } else {
    isError.value = true
  }
}

onClickOutside(executorModal, () => emit('close'))
</script>

<style scoped></style>
