<script setup lang="ts">
import {BuildingsInConstruct} from "@/typescript/types.ts";
import {onMounted, ref, watch} from "vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {StorageEntitiesCategory} from "@/typescript/enums.ts";
import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";

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
    prettyReadyTime.value = timeToPrettyInTimer(readyIn.value)
    interval = setInterval(() => {
        readyIn.value = new Date(props.item.willReadyAt - Date.now())
        prettyReadyTime.value = timeToPrettyInTimer(readyIn.value)
    }, 1000)
})

function timeToPrettyInTimer(notPretty: Date){
    return (notPretty.getMinutes()<10 ? '0'+notPretty.getMinutes():notPretty.getMinutes()) + ':' + (notPretty.getSeconds()<10 ? '0'+notPretty.getSeconds():notPretty.getSeconds())
}

function returnMaterialsForBuildingDestruct(){

    const materials = planetStore.selectedPlanet.storage.filter((st:any) => st.category === StorageEntitiesCategory.MATERIAL)
    for(let res of props.item.building.requiredMaterials){
        const existOnStorage = materials.find((onStorage:MaterialInterface) => onStorage.id === res.id)
        if(existOnStorage) existOnStorage.count += Math.floor((res.count * props.item.building.count) / 2)
        else {
            res.count = (res.count * props.item.building.count) / 2
            planetStore.selectedPlanet.storage.push(res)
        }
    }
}


watch(readyIn, (value) => {
    if(value.getMinutes() <= 0 && value.getSeconds() <= 0) {
        clearInterval(interval)
        isComplete.value = true
        prettyReadyTime.value = '00:00'
        if(props.item.forDestroy) returnMaterialsForBuildingDestruct()
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
    else exist.count += props.item.building.count
}
function deleteBuilding(){
    const exist = planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === props.item.building.id)
    if(!exist) return
    else exist.count -= props.item.building.count
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