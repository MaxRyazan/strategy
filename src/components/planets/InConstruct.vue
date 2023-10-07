<script setup lang="ts">
import {BuildingsInConstruct} from "@/typescript/types.ts";
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
    item: BuildingsInConstruct
}>()
const readyIn = ref()
const prettyReadyTime = ref()
const isComplete = ref(false)
let interval: any;

onMounted(() => {
    if(Date.now() > props.item.willReadyAt) {
        isComplete.value = true
        return
    }
    readyIn.value = new Date(props.item.willReadyAt - Date.now())
    prettyReadyTime.value = (readyIn.value.getMinutes()<10 ? '0'+readyIn.value.getMinutes():readyIn.value.getMinutes()) + ':' + (readyIn.value.getSeconds()<10 ? '0'+readyIn.value.getSeconds():readyIn.value.getSeconds())
    interval = setInterval(() => {
        readyIn.value = new Date(props.item.willReadyAt - Date.now())
        prettyReadyTime.value = (readyIn.value.getMinutes()<10 ? '0'+readyIn.value.getMinutes():readyIn.value.getMinutes()) + ':' + (readyIn.value.getSeconds()<10 ? '0'+readyIn.value.getSeconds():readyIn.value.getSeconds())
    }, 1000)
})




watch(readyIn, (value) => {
    if(value.getMinutes() <= 0 && value.getSeconds() <= 0) {
        clearInterval(interval)
        isComplete.value = true
        prettyReadyTime.value = '00:00'
    }
})


</script>

<template>
    <div style="display: flex; justify-content: space-between; padding: 2px 20px;" v-if="!isComplete">
        <div>{{item.id}}</div>
        <div>{{item.building.name}}</div>
        <div>{{ prettyReadyTime }}</div>
    </div>
</template>

<style scoped lang="scss">

</style>