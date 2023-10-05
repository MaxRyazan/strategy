<template>
    <reusable-dialog @closeDialog="$emit('close')" :header="planetStore.selectedPlanet.name" :visible="props.isPlanetVisible" style="width: 80%; margin: 0 auto">
        <div class="planet_wrapper">
            <div class="left">
                <div class="left__img">
                    <img src="@/images/another/planet-from-space.jpg" alt="planet">
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__info">
                    <planet-description-card icon="lightning.png" :variableValue="planetStore.selectedPlanet.name" text="Название планеты" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Координаты" />
                    <planet-description-card icon="lightning.png" :variableValue="planetStore.selectedPlanet.points" text="Площадки" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Пресная вода" />
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__info">
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Текущее население" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Максимум населения" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Электричество" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Производство еды" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Свободное место на складе" />
                </div>
                <hr style="margin: 8px 0"/>
                <div class="left__tech_info">
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Научный фактор" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Банковский население" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Прирост населения" />
                    <planet-description-card icon="lightning.png" :variableValue="someValue" text="Увеличение производства еды" />
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
            <div class="right">
                <div class="controls">
                    <reusable-button>Строительство</reusable-button>
                    <reusable-button>Склад</reusable-button>
                </div>
                <div class="in_build"></div>
                <div class="buildings">
                    <div class="buildings_nav">
                        <reusable-button @push="showCategory(BuildingCategory.ADMINISTRATIVE)"
                                         :class="{'activeButton': currentBuildingTab===BuildingCategory.ADMINISTRATIVE}">Административные</reusable-button>
                        <reusable-button @push="showCategory(BuildingCategory.MANUFACTURER)"
                                         :class="{'activeButton': currentBuildingTab===BuildingCategory.MANUFACTURER}">Производственные</reusable-button>
                        <reusable-button @push="showCategory(BuildingCategory.ENERGETIC)"
                                         :class="{'activeButton': currentBuildingTab===BuildingCategory.ENERGETIC}">Энергетические</reusable-button>
                        <reusable-button @push="showCategory(BuildingCategory.SCIENCES)"
                                         :class="{'activeButton': currentBuildingTab===BuildingCategory.SCIENCES}">Научные</reusable-button>
                        <reusable-button @push="showCategory(BuildingCategory.SPECIAL)"
                                         :class="{'activeButton': currentBuildingTab===BuildingCategory.SPECIAL}">Специальные</reusable-button>
                    </div>
                </div>
            </div>
        </div>
    </reusable-dialog>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import PlanetDescriptionCard from '@/components/planets/PlanetDescriptionCard.vue'
import ReusableDialog from "@/components/reusable/containers/ReusableDialog.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import {BuildingCategory} from "@/typescript/enums.ts";
const props = defineProps<{
    isPlanetVisible: boolean
}>()
defineEmits<{
    (e: 'close'):void
}>()

const currentBuildingTab = ref(BuildingCategory.ADMINISTRATIVE)
const planetStore = usePlanetStore()
const someValue = ref(222)


function showCategory(category: BuildingCategory){
    currentBuildingTab.value = category
}
</script>

<style lang="scss" scoped>
.activeButton{
  color: darkorange;
}
.buildings_nav{
  width: 100%;
  display: flex;
  gap: 2px;
  height: 24px;
  border: 1px solid red;
  & button {
    height: 100%;
    width: 100%;
  }
}
.right{
  position: relative;
  width: 100%;
}
.in_build{
  width: 100%;
  border: 1px solid red;
  height: 30%;
}
.buildings{
  width: 100%;
  border: 1px solid red;
  height: calc(70% - 28px);
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}
.controls{
  width: 100%;
  height: 26px;
  border: 1px solid red;
  & button {
    height: 100%;
  }
}
.planet_wrapper {
  width: 100%;
  color: white;
  padding: 3px;
  display: flex;
  gap: 2px;
}
.planet_resize{
  cursor: col-resize;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
}

.left {
  display: flex;
  flex-direction: column;
  width: 35%;
  max-width: 350px;
  padding: 5px 0;
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