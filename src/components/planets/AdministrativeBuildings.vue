<script setup lang="ts">

import buildings from "@/typescript/buildings.ts";
import BuildingCard from "@/components/planets/BuildingCard.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
const planetStore = usePlanetStore()
</script>

<template>
    <div class="wrapper">
        <building-card v-for="building in buildings.administrative" :building="planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === building.id) ? planetStore.selectedPlanet.buildings.find((b:BuildingInterface) => b.id === building.id) : building"/>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: calc(100% - 26px);
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 2px;
}
</style>