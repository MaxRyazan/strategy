<script setup lang="ts">
import {onMounted} from "vue";
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";

onMounted(() => {
    const playerStore = usePlayerStore()
    const planet = new Planet(1, 'Earth', 300)
    playerStore.player = new Player(1, 'shooter', {homePlanet: planet, colonies: []})
})
</script>

<template>
    <router-view />
</template>

<style scoped lang="scss">

</style>
