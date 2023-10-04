<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import HeaderControlsButtons from '@/components/header/HeaderControlsButtons.vue'
import PlanetComponent from "@/components/planets/PlanetComponent.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";

const isPlanetVisible = ref(false)
const planetStore = usePlanetStore()
const playerStore = usePlayerStore()
const player = ref() as Ref<Player>

onMounted(() => {
    player.value = playerStore.player
})
function showSelectedPlanet(planet: Planet){
    isPlanetVisible.value = !isPlanetVisible.value
    planetStore.selectedPlanet = planet
}
</script>

<template>
    <div class="main_wrapper">
        <header-controls-buttons @openPlanet="showSelectedPlanet"/>
        <planet-component class="planet" @close="isPlanetVisible=false" :is-planet-visible="isPlanetVisible"
                          v-if="isPlanetVisible"/>
    </div>
</template>

<style scoped lang="scss">
.main_wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
}
</style>