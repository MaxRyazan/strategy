<script setup lang="ts">

import buildings from "@/typescript/buildings.ts";
import BuildingCard from '@/components/planets/BuildingCard.vue';

</script>

<template>
    <div class="wrapper">
        <building-card v-for="building in buildings.administrative" :building="building"/>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: calc(100% - 26px);
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  border: 1px solid blue;
  gap: 2px;
}
</style>