<script setup lang="ts">
import ScienceCard from "@/components/science/ScienceCard.vue";
import {ShipBuilding} from "@/typescript/classes/science/ShipBuilding.ts";

</script>

<template>
    <div class="ship_building">
        <science-card :science="new ShipBuilding()"/>
    </div>
</template>

<style scoped lang="scss">

</style>