<script setup lang="ts">

import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import {BuildingsInConstruct} from "@/typescript/types.ts";
import {ref, watch} from "vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";

const props = defineProps<{
    item: BuildingsInConstruct
}>()
const planetStore = usePlanetStore()
let interval: any;
const timeToComplete = ref()

function normalizeTime(time: number){
    let minutes: number = 0;
    let seconds: number;
    const subtract = time - Date.now()
    seconds = Math.round(subtract / 1000)
    if(seconds > 60) {
        minutes = Math.floor(seconds / 60)
        seconds = Math.floor(seconds - minutes * 60)
    }
    timeToComplete.value = (minutes? minutes : 0) + ':' + ( seconds<10 ? '0'+seconds : seconds)
    if(minutes === 0){
        if(seconds <= 0) {
            clearInterval(interval)
            planetStore.selectedPlanet.buildingsInConstruct = planetStore.selectedPlanet.buildingsInConstruct.filter((item: BuildingsInConstruct) => item.building.id !== props.item.building.id)
            timeToComplete.value = 0
            const existing = planetStore.selectedPlanet.buildings.find((item: BuildingInterface) => item.id === props.item.building.id)
            if(existing) existing.count += 1
            else planetStore.selectedPlanet.buildings.push(props.item.building)

        }
    }
}

function cancelBuildingConstruct(building: BuildingInterface){
    planetStore.selectedPlanet.buildingsInConstruct = planetStore.selectedPlanet.buildingsInConstruct.filter((item: BuildingsInConstruct) => item.building.id !== building.id)
}

watch(planetStore.selectedPlanet.buildingsInConstruct, () => {
    if(planetStore.selectedPlanet.buildingsInConstruct.length){
        interval = setInterval(() => {
            normalizeTime(props.item.willReadyAt)
        }, 1000)
    } else {
        clearInterval(interval)
    }
}, {immediate: true})
</script>

<template>
    <div>{{item.building.name}}</div>
    <div>{{item.building.count}}</div>
    <div style="position: relative">
        <div style="padding-right: 25px">{{timeToComplete}}</div>
        <reusable-button @push="cancelBuildingConstruct(item.building)" close_btn style="right:0; width: 15px;height: 15px;"></reusable-button>
    </div>
</template>

<style scoped lang="scss">

</style>