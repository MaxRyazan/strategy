<template>
    <div class="top_buttons">
        <reusable-button @push="isPlanetListOpen=true" style=" width: 75px;" v-if="!isPlanetListOpen">+
        </reusable-button>
        <reusable-button @push="isPlanetListOpen=false" style=" width: 75px;" v-else>-</reusable-button>
        <reusable-button @push="$emit('openScience')">Исследования</reusable-button>
        <div class="current_research" v-if="playerStore.player.account.currentInResearch">
            <reusable-text v-if="playerStore.player.account.currentInResearch">
                {{ playerStore.player.account.currentInResearch.science?.name }}
            </reusable-text>
            <reusable-text style="margin-right: 30px;" v-if="playerStore.player.account.currentInResearch">
                ур. {{ playerStore.player.account.currentInResearch.science?.lvl }}
            </reusable-text>
            <reusable-text v-if="playerStore.player.account.currentInResearch">{{ timer }}</reusable-text>
            <reusable-button close_btn @push="cancelResearch"/>
        </div>
        <div class="current_research" v-else>
            <reusable-text>Нет исследований</reusable-text>
        </div>
    </div>
    <div class="player_colonies" v-if="isPlanetListOpen">
        <reusable-button style="width: 100%;" @push="$emit('openPlanet', player?.account.homePlanet)">
            {{ player?.account.homePlanet.name }}
        </reusable-button>
        <div v-for="planet in player?.account.colonies" :key="planet.id">
            <reusable-button style="width: 100%;" @push="$emit('openPlanet', planet)">{{ planet.name }}
            </reusable-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {computed, onMounted, onUnmounted, Ref, ref, watch} from "vue";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import ReusableText from "@/components/reusable/text/ReusableTextForDescription.vue";

const playerStore: { player: Player } = usePlayerStore() as any
const player: Ref<Player> = ref() as Ref<Player>
const isPlanetListOpen = ref(false)
let interval: any;
let timer = ref()

onMounted(() => {
    player.value = playerStore.player
})
onUnmounted(() => clearInterval(interval))
defineEmits<{
    (e: 'openPlanet', planet: Planet): void
    (e: 'openScience'): void
}>()

function timeToResearchReady() {
    if (!playerStore.player.account.currentInResearch) return
    const now = Date.now()
    let sub = 0
    if (playerStore.player.account.currentInResearch.timeWhenReady) {
        sub = playerStore.player.account.currentInResearch.timeWhenReady - now
        if (!sub || sub <= 0) {
            clearInterval(interval)
            const tech = playerStore.player.account.science.find(sc => sc.id === playerStore.player.account.currentInResearch?.science.id)
            if(!tech) playerStore.player.account.science.push(playerStore.player.account.currentInResearch.science)
            else tech.lvl = playerStore.player.account.currentInResearch.science.lvl
            cancelResearch()
        }
        let hours = 0;
        let minutes: any = 0;
        let seconds: any = 0;
        seconds = Math.floor(sub / 1000)
        if (seconds > 60) {
            minutes = Math.floor(seconds / 60)
            seconds = seconds - minutes * 60
        }
        if (minutes > 60) {
            hours = Math.floor(minutes / 60)
            minutes = minutes - hours * 60
        }
        if (seconds < 10) seconds = '0' + seconds
        if (minutes < 10) minutes = '0' + minutes
        return `${hours}:${minutes}:${seconds}`
    }
}

function cancelResearch() {
    playerStore.player.account.currentInResearch = null
}

watch(computed(() => playerStore.player.account.currentInResearch),(value) => {
    if(value) {
        interval = setInterval(() => {
            timer.value = timeToResearchReady()
        }, 1000)
    }
}, {immediate: true})

</script>
<style lang="scss" scoped>
.player_colonies {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 75px;
  padding: 2px;
}

.top_buttons {
  width: calc(100% - 6px);
  border: 1px solid red;
  display: flex;
  gap: 5px;
  padding: 2px;
}

.current_research {
  min-width: 300px;
  position: relative;
  padding: 1px 40px;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
  cursor: default;
}
</style>