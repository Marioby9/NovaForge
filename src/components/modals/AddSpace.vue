<template>
    <div class="modal-bg">
        <div class="modal" ref="spaceModal">
            <h1 class="text-2xl">Añade un espacio nuevo</h1>
            <div class="flex gap-8 items-center">
                <label for="nombre">Nombre: </label>
                <input type="text" id="nombre" placeholder="Ej: Salón" class="p-2 rounded-md text-darkBlack" v-model="name">
            </div>
            <p class="text-bone" v-if="isError">Error. Debes introducir algún valor</p>
            <div class="mt-4 flex gap-8">
                <p 
                    class=" p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
                    @click="emit('close')"
                    >cancelar
                </p>
                <p 
                    class=" text-orange p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
                    @click="clickAddSpace"
                    >añadir
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { onClickOutside } from "@vueuse/core";

    //

    const name = ref('')
    const isError = ref(false)
    const emit = defineEmits(['close', 'add'])
    const spaceModal = ref(null)

    //

    const clickAddSpace = () => {
        if(name.value != ''){
            emit('add', name.value)
        }
        else{
            isError.value = true
        }
    }


    onClickOutside(spaceModal, () => (emit('close')));
</script>

<style scoped>

</style>