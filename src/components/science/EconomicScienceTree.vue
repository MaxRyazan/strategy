<script setup lang="ts">
import ScienceCard from "@/components/science/ScienceCard.vue";
import {FasterBuildingConstruct} from "@/typescript/classes/science/FasterBuildingConstruct.ts";

</script>

<template>
    <div class="economic">
        <science-card :science="new FasterBuildingConstruct()"/>
    </div>
</template>

<style scoped lang="scss">
.economic{
  padding: 3px;
}
</style>