<script setup lang="ts">
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

import {usePlanetStore} from "@/pinia/planetStore.ts";
import {onMounted, Ref, ref, watch} from "vue";
import {Buildings} from "@/typescript/enums.ts";
import {Planet} from "@/typescript/classes/Planet.ts";
import {BuildingsInConstruct} from "@/typescript/types.ts";

const planetStore = usePlanetStore()
const selectedPlanet: Planet = planetStore.selectedPlanet
const props = defineProps<{
    building: BuildingInterface
}>()
const existingBuilding: Ref<BuildingInterface|undefined> = ref() as Ref<BuildingInterface>

onMounted(() => {
    existingBuilding.value = selectedPlanet.buildings.find((building: BuildingInterface) => building.id === props.building.id)
})

function addBuildingToBuildQueue(){
    const alreadyCreated = selectedPlanet.buildings.find((item:BuildingInterface) => item.id === props.building.id)
    const alreadyInProgress = planetStore.selectedPlanet.buildingsInConstruct.find((item:BuildingsInConstruct) => item.building.id === props.building.id)
    if((alreadyInProgress || alreadyCreated) && props.building.name === Buildings.COLONY) return
    if(!alreadyInProgress) {
        const newBuilding = Object.assign({}, props.building)
        newBuilding.count += 1
        selectedPlanet.buildingsInConstruct.push({
            building: newBuilding,
            willReadyAt: Date.now() + props.building.timeOfCreation
        })
    }
    else alreadyInProgress.building.count += 1
}
function addBuildingToDestroyQueue(){
    if(props.building.count > 0){
        selectedPlanet.buildingsInDestruct.push({building: props.building, willReadyAt: (Date.now() + props.building.timeOfCreation) / 2})
    }
}

</script>

<template>
    <div class="card">
        <div class="card_header">
            <div class="card_name">{{ props.building.name }}</div>
            <div class="card_count">{{ existingBuilding?.count ?? '' }}</div>
        </div>
        <div class="card_image">

        </div>
        <div class="card_button">
            <reusable-button @push="addBuildingToBuildQueue" :class="{'inactive': existingBuilding?.name===Buildings.COLONY}">Построить</reusable-button>
            <reusable-button @push="addBuildingToDestroyQueue" :class="{'inactive': !existingBuilding}">Снести</reusable-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
  color: white;
  border: 2px solid white;
  padding: 2px;
  max-width: 200px;
  min-width: 150px;
  width: 33%;
  height: 50%;
  min-height: 150px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.card_name{
  width: 85%;
}
.card_header{
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  align-items: center;
  height: 20%;
  cursor: default;
}
.card_image{
  height: 60%;
}

.card_button {
  display: flex;
  flex-direction: column;
  height: 50px;
  gap: 2px;
  & button {
    height: 24px;
    width: 100%;
    color: white;
    cursor: pointer;
    background-color: $primeViolet;
    &:hover {
      background-color: $secondViolet;
    }
  }
}
.inactive{
  color: gray !important;
  &:hover{
    cursor: default;
    background-color: $primeViolet !important;
  }
}
</style>