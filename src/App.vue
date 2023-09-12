<script setup lang="ts">
import {ref} from "vue";
import HeaderControlsButtons from '@/components/header/HeaderControlsButtons.vue'
import PlanetComponent from "@/components/planets/PlanetComponent.vue";

const isPlanetVisible = ref(false)

</script>

<template>
    <div class="main_wrapper">
        <header-controls-buttons @openPlanet="isPlanetVisible=true"/>
        <planet-component :is-planet-visible="isPlanetVisible"/>
    </div>
</template>

<style scoped lang="scss">
.main_wrapper{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
}
</style>
