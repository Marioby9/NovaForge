<template>
    <div class="flex items-center justify-between w-[99%] rounded-md bg-bone text-darkBlack border-l-8 border-solid border-darkBlack font-bold p-5">
        <div class="flex items-center gap-6">
            <h1 class="text-xl">{{ props.name }}</h1>
            <h2 class="text-sm">{{ props.id }}</h2>
        </div>
        <div class="flex items-center gap-10">
            <h1>{{ props.date }}</h1>
            <div class="flex gap-5 text-xl items-center">
                <RouterLink :to="'/editSpace/'+props.id">
                    <font-awesome-icon class="cursor-pointer icnBtn" icon="gear"/>
                </RouterLink>
                <font-awesome-icon class="cursor-pointer icnBtn" icon="trash" @click="deleteSpace(props.id)"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { deleteSpace } from '@/fb'
    import { RouterLink } from 'vue-router'

    //

    const props = defineProps(['name', 'id', 'date'])

    //

</script>

<style scoped>

</style>