<template>
    <reusable-button @push="isPlanetListOpen=true" style=" width: 75px;" v-if="!isPlanetListOpen">+</reusable-button>
    <reusable-button @push="isPlanetListOpen=false" style=" width: 75px;" v-else>-</reusable-button>
    <div class="player_colonies" v-if="isPlanetListOpen">
        <reusable-button style="width: 100%;" @push="$emit('openPlanet', player?.account.homePlanet)">{{player?.account.homePlanet.name}}</reusable-button>
        <div v-for="planet in player?.account.colonies" :key="planet.id">
            <reusable-button style="width: 100%;" @push="$emit('openPlanet', planet)">{{planet.name}}</reusable-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {onMounted, Ref, ref} from "vue";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

const playerStore: any = usePlayerStore()
const player: Ref<Player> = ref() as Ref<Player>
const isPlanetListOpen = ref(false)
onMounted(() => {
    player.value = playerStore.player
})
defineEmits<{
    (e: 'openPlanet', planet: Planet): void
}>()
</script>
<style lang="scss" scoped>
.player_colonies{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 75px;
}
</style>