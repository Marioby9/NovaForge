<template>
    <div class="modal-bg">
      <div class="modal" ref="sensorModal">
        <h1 class="text-2xl">Añade un sensor para {{ props.space }}</h1>
        <div class="flex gap-8 items-center w-full">
          <label for="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej: Salón"
            class="p-2 rounded-md w-full text-darkBlack"
            v-model="name"
          />
        </div>
        <div class="flex gap-8 items-center w-full">
            <div class="flex items-center gap-3">
                <label>Unidad: </label>
                <select class="text-darkBlack px-3 py-2 rounded-md cursor-pointer" v-model="unit">
                    <option v-for="(elm, indx) in units" :key="indx" :value="elm">{{elm.name}}</option>
                </select>
            </div>
            <div class="flex items-center gap-3">
                <label>Valor: </label>
                <input class="w-full text-darkBlack p-2 rounded-md" type="text" placeholder="Valor">
                <font-awesome-icon class="cursor-pointer" :icon="unit.icon" @click="deleteSpace(props.id)"/>
            </div>
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
            @click="clickAddSensor"
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
  const sensorModal = ref(null)

  const units = [
    {name: 'Temperatura', unitMessure: 'ºC', icon: 'temperature-three-quarters'},
    {name: 'Humedad', unitMessure: '%', icon: 'droplet'},
    {name: 'CO2', unitMessure: 'ppm', icon: ''},
    {name: 'Luminosidad', unitMessure: 'Lx', icon: 'lightbulb'},
    {name: 'Sonido', unitMessure: 'dB', icon: ''},
    {name: 'Presión', unitMessure: 'Pa', icon: ''}

  ]
  const unit = ref(units[0])

  
  //
  
  const clickAddSensor = () => {
    if (name.value != '') {
      //emit('add', {name: name.value, on: isActive.value })
    } else {
      isError.value = true
    }
  }

  onClickOutside(sensorModal, () => emit('close'))

  </script>
  
  <style scoped></style>
  