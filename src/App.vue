<script setup lang="ts">
import {onMounted} from "vue";
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";
import {Colony} from "@/typescript/classes/buildings/Colony.ts";
import {ConstructionMaterials} from "@/typescript/classes/materials/ConstructionMaterials.ts";
import {Electronic} from "@/typescript/classes/materials/Electronic.ts";
import {FasterBuildingConstruct} from "@/typescript/classes/science/FasterBuildingConstruct.ts";

onMounted(() => {
    const playerStore = usePlayerStore()
    const planet = new Planet(1, 'Earth', 300, [], [], [])
    const planet2 = new Planet(2, 'Mars', 400, [], [], [])
    const planet3 = new Planet(3, 'Venus', 200, [], [], [])
    const constrMaterial = new ConstructionMaterials(10)
    const electronic = new Electronic(10)
    const colony = new Colony(1)
    planet.buildings.push(colony)
    planet.storage.push(constrMaterial)
    planet.storage.push(electronic)
    playerStore.player = new Player(
        1,
        'shooter',
        {homePlanet: planet, colonies: [planet2, planet3], science: [new FasterBuildingConstruct(5)], SP: 100, currentInResearch: null, bonuses: []}
    )
})
</script>

<template>
    <router-view />
</template>

<style scoped lang="scss">

</style>
