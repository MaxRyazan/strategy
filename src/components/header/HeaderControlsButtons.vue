<template>
    <reusable-button @push="$emit('openPlanet', player?.account.homePlanet)">{{player?.account.homePlanet.name}}</reusable-button>
    <div v-for="planet in player?.account.colonies" :key="planet.id">
        <reusable-button @push="$emit('openPlanet', planet)">{{planet.name}}</reusable-button>
    </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {onMounted, Ref, ref} from "vue";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";

const playerStore: any = usePlayerStore()
const player: Ref<Player> = ref() as Ref<Player>
onMounted(() => {
    player.value = playerStore.player
})
defineEmits<{
    (e: 'openPlanet', planet: Planet): void
}>()
</script>
<style lang="scss" scoped>

</style>