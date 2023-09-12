<template>
    <Dialog :show-header="false" v-model:visible="props.isPlanetVisible"
            style="width:98%; min-width: 310px; max-width: 1800px">
        <div class="planet_wrapper">
            <div class="left">
                <div class="left__img">
                    <img src="@/images/another/planet-from-space.jpg" alt="planet">
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__info">
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Название планеты" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Координаты" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Площадь" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Текущее население" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Максимум населения" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Электричество" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Пресная вода" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Производство еды" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Свободное место на складе" />
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__tech_info">
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Научный фактор" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Банковский население" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Прирост населения" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Увеличение произвводства еды" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Ускорение производства модулей" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Ускорение добычи и переработки" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Ускорение постройки кораблей" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Ускорение постройки зданий" />
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__consuming">
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Потребление пресной воды" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Потребление еды" />
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__balance">
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Баланс пресной воды" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Баланс еды" />
                </div>
            </div>
            <div class="right"></div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import PlanetDescriptionCard from '@/components/planets/PlanetDescriptionCard.vue'
import {defineProps, ref} from 'vue'
const props = defineProps<{
    isPlanetVisible: boolean
}>()

const someValue = ref(222)
</script>
<style lang="scss" scoped>
.planet_wrapper {
  width: 100%;
  color: white;
  border: 1px solid white;
  padding: 3px;
  display: flex;
  gap: 2px;
}

.left {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 5px;
  border-right: 2px solid white;
}
.left__item{
  cursor: default;
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
  &:hover{
    background-color: cornflowerblue;
  }
}

.left__img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 80%;
  }
}

.left__info,
.left__tech_info,
.left__consuming,
.left__balance{
  display: flex;
  flex-direction: column;
}
</style>