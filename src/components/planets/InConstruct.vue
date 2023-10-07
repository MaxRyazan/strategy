<script setup lang="ts">
import {BuildingsInConstruct} from "@/typescript/types.ts";
import {onMounted, ref, watch} from "vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";

const planetStore = usePlanetStore()
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
        deleteFromQueue()
        addToPlanetBuildings()
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
        deleteFromQueue()
        if(!props.item.forDestroy) addToPlanetBuildings()
        else deleteBuilding()
    }
})

function deleteFromQueue(){
    planetStore.selectedPlanet.buildingsInConstruct = planetStore.selectedPlanet.buildingsInConstruct.filter((b:BuildingsInConstruct) => b.id !== props.item.id)
}
function addToPlanetBuildings(){
    const exist = planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === props.item.building.id)
    if(!exist) planetStore.selectedPlanet.buildings.push(props.item.building)
    else exist.count += 1
}
function deleteBuilding(){
    const exist = planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === props.item.building.id)
    if(!exist) return
    else exist.count -= 1
}

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