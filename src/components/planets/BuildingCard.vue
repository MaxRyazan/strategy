<script setup lang="ts">
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {Buildings} from "@/typescript/enums.ts";
import {onMounted, Ref, ref, watch} from "vue";
import {BuildingsInConstruct} from "@/typescript/types.ts";
import ReusableInput from "@/components/reusable/ReusableInput.vue";

const planetStore = usePlanetStore()
const isBuildingExistOnPlanet: Ref<boolean> = ref(false)
const existingBuilding: Ref<BuildingInterface|undefined> = ref()
const buildingCountToConstruct: Ref<number> = ref(1)
const buildingCountToDestruct: Ref<number> = ref(1)

const props = defineProps<{
    building: BuildingInterface
}>()
onMounted(() => {
    isBuildingExistOnPlanet.value = planetStore.selectedPlanet.buildings.some((b:BuildingInterface) => b.id === props.building.id)
    if(isBuildingExistOnPlanet.value) existingBuilding.value = planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === props.building.id)
})


function checkThatBuildingsToDestroyCountMoreThanZero(){
    const buildingToDestroy: BuildingInterface = props.building
    const exists: BuildingInterface = planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === buildingToDestroy.id)
    const inQueue: BuildingInterface = planetStore.selectedPlanet.buildingsInConstruct.find((b:BuildingsInConstruct) => (b.building.id === buildingToDestroy.id) && b.forDestroy)
    let count = 0
    if(exists) count+=exists.count
    if(inQueue) count+=inQueue.count
    return count >= 1
}

function setToQueue(forDestroy: boolean){
    if(!existingBuilding.value && forDestroy){ return }
    if((!existingBuilding.value || existingBuilding.value?.count <= 0) && forDestroy) {
        return;
    }
    let newBuilding: BuildingInterface;
    if(forDestroy){
        if(!checkThatBuildingsToDestroyCountMoreThanZero()) { return }
        newBuilding = {
            id: props.building.id,
            name: props.building.name,
            count: Number(buildingCountToDestruct.value > 1 ? buildingCountToDestruct.value : 1),
            timeOfCreation: props.building.timeOfCreation
        }
    } else {
        newBuilding = {
            id: props.building.id,
            name: props.building.name,
            count: Number(buildingCountToConstruct.value > 1 ? buildingCountToConstruct.value : 1),
            timeOfCreation: props.building.timeOfCreation
        }
    }
    let id;
    if(!planetStore.selectedPlanet.buildingsInConstruct.length) id = 0
    else id = planetStore.selectedPlanet.buildingsInConstruct[planetStore.selectedPlanet.buildingsInConstruct.length - 1].id + 1
    const objectToConstruct = {
        building: newBuilding,
        willReadyAt: Date.now() + newBuilding.timeOfCreation * newBuilding.count,
        forDestroy: forDestroy,
        id: id
    }
    Object.freeze(objectToConstruct)
    planetStore.selectedPlanet.buildingsInConstruct.push(objectToConstruct)
}

/**
 * Следим за изменением построенных зданий на планете.
 */
watch(planetStore.selectedPlanet.buildings, () => {
    const exist = planetStore.selectedPlanet.buildings.find((b: BuildingInterface) => b.id === props.building.id)
    if(exist) existingBuilding.value = exist

})

</script>

<template>
    <div class="card">
        <div class="card_header">
            <div class="card_name">{{ props.building.name }}</div>
            <div class="card_count">{{existingBuilding ? (existingBuilding.count > 0 ? existingBuilding.count : '') : ''}}</div>
        </div>
        <div class="card_image">

        </div>
        <div class="card_button">
            <div style="display: flex; width: 100%;">
                <reusable-input type="number" for_button v-model="buildingCountToConstruct" />
                <reusable-button in_card_button @push="setToQueue(false)" :class="{'inactive': existingBuilding?.name===Buildings.COLONY}">Построить</reusable-button>
            </div>
            <div style="display: flex; width: 100%;">
                <reusable-input type="number" for_button v-model="buildingCountToDestruct" />
                <reusable-button in_card_button @push="setToQueue(true)" :class="{'inactive': !existingBuilding?.count}">Снести</reusable-button>
            </div>
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

.card_name {
  width: 85%;
}

.card_header {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  align-items: center;
  height: 20%;
  cursor: default;
}

.card_image {
  height: 60%;
}

.card_button {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50px;
  gap: 2px;
}

.inactive {
  color: gray !important;

  &:hover {
    cursor: default;
    background-color: $primeViolet !important;
  }
}
</style>