<script setup lang="ts">
import {AbstractBuilding} from "@/typescript/classes/abstract classes/AbstractBuilding.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

import {usePlanetStore} from "@/pinia/planetStore.ts";
import {onMounted, Ref, ref} from "vue";
import {Buildings} from "@/typescript/enums.ts";

const planetStore = usePlanetStore()
const props = defineProps<{
    building: AbstractBuilding
}>()
const existingBuilding: Ref<AbstractBuilding> = ref() as Ref<AbstractBuilding>

onMounted(() => {
    existingBuilding.value = planetStore.selectedPlanet.buildings.find((building: AbstractBuilding) => building.id === props.building.id)
    console.log(existingBuilding.value)
})
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
            <reusable-button :class="{'inactive': existingBuilding?.name===Buildings.COLONY}">Построить</reusable-button>
            <reusable-button :class="{'inactive': !existingBuilding}">Снести</reusable-button>
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
  border: 1px solid red;
  cursor: default;
}
.card_image{
  height: 60%;
  border: 1px solid red;
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