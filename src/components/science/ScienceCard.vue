<script setup lang="ts">
import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";
import ReusableText from "@/components/reusable/text/ReusableTextForDescription.vue";
import {usePlayerStore} from "@/pinia/playerStore.ts";
import {computed} from "vue";
import {SCIENCE_COEFFICIENT} from "@/constants.ts";
import {Player} from "@/typescript/classes/Player.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

const props = defineProps<{
    science: ScienceInterface
}>()
const playerStore: {player: Player} = usePlayerStore()

const getCurrLvlOfScience: ScienceInterface = playerStore.player.account.science.find((sc: ScienceInterface) => sc.id === props.science.id) as ScienceInterface
const currPlayerSPPerSec = computed(() => playerStore.player.account.SP / 3600)


function calcPrice(lvl: number){
    return 20 + 30 * (lvl * (1 + SCIENCE_COEFFICIENT))
}
function addScienceToResearch(){
    if(playerStore.player.account.currentInResearch) return
    playerStore.player.account.currentInResearch = {
        timeWhenReady: Date.now() + (calcPrice(getCurrLvlOfScience.lvl + 1) / currPlayerSPPerSec.value) * 1000,
        science: {
            id: props.science.id,
            name: props.science.name,
            lvl: getCurrLvlOfScience.lvl + 1,
            category: props.science.category,
            bonus: props.science.bonus,
            price: calcPrice(props.science.lvl)
        }
    }
}

function normalizeTimePeriod() {
    const qq =  props.science.price / currPlayerSPPerSec.value
    let hours = 0;
    let minutes = Math.floor(qq * 60)
    if(minutes > 60) {
        hours = Math.floor(minutes / 60)
        minutes = Math.floor(minutes - hours * 60)
    }
    return `${hours}:${minutes<10?'0'+minutes:minutes}`
}


</script>

<template>
    <div class="card">
        <div class="card__name">
            <reusable-text>{{ props.science.name }}</reusable-text>
        </div>
        <div class="bonus__info">
            <div class="bonus__info--item" title="Тек уровень исследования">
                <img src="@/images/icons/currScienceLvl.png" alt="lvl">
                <div class="card_name">
                    <reusable-text>{{ getCurrLvlOfScience.lvl }}</reusable-text>
                </div>
            </div>
            <div class="bonus__info--item" title="Тек размер бонуса">
                <img src="@/images/icons/bonusIcon.png" alt="bonus">
                <div class="card_name">
                    <reusable-text> {{ props.science.bonus.bonusValuePerLvl * (getCurrLvlOfScience ? getCurrLvlOfScience?.lvl : 0) }} %</reusable-text>
                </div>
            </div>
            <img @click="addScienceToResearch" style="margin-left: 30px; cursor: pointer"
                 src="@/images/icons/greenArrowToTop.png" alt="icon"
                 :title="`Длительность исследования след уровня: ${normalizeTimePeriod()}`"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
  width: 220px;
  height: 64px;
  border: 1px solid white;
  color: white;
  text-align: center;
  padding: 0 3px;
  position: relative;
}

.bonus__info {
  display: flex;
  width: 100%;
  padding: 0 3px;
  justify-content: space-evenly;
  & img {
    height: 30px;
  }
}

.bonus__info--item {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: default;
}
.card__name{
  margin-bottom: 10px;
}
</style>