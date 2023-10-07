<script setup lang="ts">
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {Buildings} from "@/typescript/enums.ts";
import {onMounted, Ref, ref} from "vue";

const planetStore = usePlanetStore()
const isBuildingExistOnPlanet: Ref<boolean> = ref(false)
const existingBuilding: Ref<BuildingInterface|undefined> = ref()

const props = defineProps<{
    building: BuildingInterface
}>()
onMounted(() => {
    isBuildingExistOnPlanet.value = planetStore.selectedPlanet.buildings.some((b:BuildingInterface) => b.id === props.building.id)
    if(isBuildingExistOnPlanet.value) existingBuilding.value = planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === props.building.id)
})

function setToQueue(forDestroy: boolean){
    if(!existingBuilding.value && forDestroy){ return }

    const newBuilding: BuildingInterface = {
        id: props.building.id,
        name: props.building.name,
        count: 1,
        timeOfCreation: props.building.timeOfCreation
    }
    const id = planetStore.selectedPlanet.buildingsInConstruct.length
    const objectToConstruct = {
        building: newBuilding,
        willReadyAt: Date.now() + newBuilding.timeOfCreation,
        forDestroy: forDestroy,
        id: id
    }
    Object.freeze(objectToConstruct)
    planetStore.selectedPlanet.buildingsInConstruct.push(objectToConstruct)
}



</script>

<template>
    <div class="card">
        <div class="card_header">
            <div class="card_name">{{ props.building.name }}</div>
            <div class="card_count">{{existingBuilding? existingBuilding.count : ''}}</div>
        </div>
        <div class="card_image">

        </div>
        <div class="card_button">
            <div>
                <reusable-button @push="setToQueue(false)"
                                 :class="{'inactive': existingBuilding?.name===Buildings.COLONY}">Построить
                </reusable-button>
            </div>
            <div>
                <reusable-button @push="setToQueue(true)" :class="{'inactive': !existingBuilding}">Снести</reusable-button>
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

.inactive {
  color: gray !important;

  &:hover {
    cursor: default;
    background-color: $primeViolet !important;
  }
}
</style>