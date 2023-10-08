<script setup lang="ts">
import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";
import ReusableText from "@/components/reusable/text/ReusableTextForDescription.vue";
import {usePlayerStore} from "@/pinia/playerStore.ts";

const props = defineProps<{
    science: ScienceInterface
}>()
const playerStore = usePlayerStore()

const getCurrLvlOfScience: ScienceInterface = playerStore.player.account.science.find((sc: ScienceInterface) => sc.id === props.science.id)

function addScienceToResearch(){

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
            <img @click="addScienceToResearch" style="margin-left: 30px; cursor: pointer" src="@/images/icons/greenArrowToTop.png" alt="icon">
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