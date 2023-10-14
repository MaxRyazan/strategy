<script setup lang="ts">
import {computed, onMounted, Ref, ref, watch} from "vue";
import HeaderControlsButtons from '@/components/header/HeaderControlsButtons.vue'
import PlanetComponent from "@/components/planets/PlanetComponent.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {Player} from "@/typescript/classes/Player.ts";
import {Planet} from "@/typescript/classes/Planet.ts";
import ScienceComponent from "@/components/science/ScienceComponent.vue";


const isPlanetVisible = ref(false)
const planetStore = usePlanetStore()
const playerStore:{player: Player} = usePlayerStore() as any
const player = ref() as Ref<Player>
const isScienceVisible = ref(false)


onMounted(() => {
    player.value = playerStore.player
})
function showSelectedPlanet(planet: Planet){
    isPlanetVisible.value = !isPlanetVisible.value
    planetStore.selectedPlanet = planet
}

watch(computed(() => playerStore.player.account.science), () => {
    console.log('Посчитали бонусы')
    calculateBonuses()
}, {deep: true, immediate: true})

function calculateBonuses(){
    playerStore.player.account.science.forEach(tech => {
        if(tech.bonus){
            const existingBonus = playerStore.player.account.bonuses.find(bonus => bonus.bonusType === tech.bonus.bonusType)
            if(!existingBonus) playerStore.player.account.bonuses.push({bonusType: tech.bonus.bonusType, size: tech.bonus.bonusValuePerLvl * tech.lvl})
            else existingBonus.size = existingBonus.size + tech.bonus.bonusValuePerLvl * tech.lvl
        }
    })
}

</script>

<template>
    <div class="main_wrapper">
        <header-controls-buttons
                @open-science="isScienceVisible=!isScienceVisible"
                @openPlanet="showSelectedPlanet"/>
        <planet-component @close="isPlanetVisible=false" :is-planet-visible="isPlanetVisible" v-if="isPlanetVisible"/>
        <science-component @close="isScienceVisible=false" :is-science-visible="isScienceVisible" v-if="isScienceVisible"/>
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