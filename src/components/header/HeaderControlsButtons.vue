<template>
    <reusable-button @push="$emit('openPlanet')">{{player?.account.homePlanet.name}}</reusable-button>
</template>

<script setup lang="ts">
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {onMounted, Ref, ref} from "vue";
import {Player} from "@/typescript/classes/Player.ts";

const playerStore: any = usePlayerStore()
const player: Ref<Player> = ref() as Ref<Player>
onMounted(() => {
    player.value = playerStore.player
})
defineEmits<{
    (e: 'openPlanet'): void
}>()
</script>
<style lang="scss" scoped>

</style>