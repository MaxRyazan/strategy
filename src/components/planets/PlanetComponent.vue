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
                    <planet-description-card icon="lightning.png" :variableValue="emptyStorageValue" text="Свободное место на складе" />
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
                    <reusable-button @push="currentTopMenuTab=TopMenu.BUILDING" :class="{'activeButton': currentTopMenuTab===TopMenu.BUILDING}">Строительство</reusable-button>
                    <reusable-button @push="currentTopMenuTab=TopMenu.STORAGE" :class="{'activeButton': currentTopMenuTab===TopMenu.STORAGE}">Склад</reusable-button>
                </div>
                <div class="building_component_wrapper" v-if="currentTopMenuTab === TopMenu.BUILDING">
                    <div class="in_build">
                        <in-construct v-for="item in planetStore.selectedPlanet.buildingsInConstruct" :key="item.id" :item="item"/>
                    </div>
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
                        <component :is="currentComponent" />
                    </div>

                </div>
                <div class="storage_component_wrapper storage" v-if="currentTopMenuTab === TopMenu.STORAGE">
                    <div class="storage__resources">
                        <reusable-text class="storage__column--title">Ресурсы</reusable-text>
                    </div>
                    <div class="storage__materials">
                        <reusable-text class="storage__column--title">Материалы</reusable-text>
                        <div style="display: flex;width: 100%; justify-content: space-between">
                            <reusable-text style="width: 60%;  background-color: lightblue; color:black;border-top: 1px solid black;padding: 1px">Название</reusable-text>
                            <reusable-text style="width: 20%;  background-color: lightblue; color:black;border-top: 1px solid black;padding: 1px">Количество</reusable-text>
                            <reusable-text style="width: 20%;  background-color: lightblue; color:black;border-top: 1px solid black;padding: 1px">Вес</reusable-text>
                        </div>
                        <div style="display: flex; padding: 3px 20px; justify-content: space-between" v-for="material in storageMaterials" :key="material.id">
                            <div style="width: 60%;">{{material.name}}</div>
                            <div style="width: 20%;">{{material.count}}</div>
                            <div style="width: 20%;">{{material.weight * material.count}}</div>
                        </div>
                    </div>
                    <div class="storage__modules">
                        <reusable-text class="storage__column--title">Модули</reusable-text>
                    </div>
                </div>
            </div>
        </div>
    </reusable-dialog>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, shallowRef, watch} from 'vue'
import PlanetDescriptionCard from '@/components/planets/PlanetDescriptionCard.vue'
import ReusableDialog from "@/components/reusable/containers/ReusableDialog.vue";
import {usePlanetStore} from "@/pinia/planetStore.ts";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import {BuildingCategory, Materials, StorageEntitiesCategory, TopMenu} from "@/typescript/enums.ts";
import AdministrativeBuildings from "@/components/planets/AdministrativeBuildings.vue";
import EnergyBuildings from "@/components/planets/EnergyBuildings.vue";
import ManufacturerBuildings from "@/components/planets/ManufacturerBuildings.vue";
import SpecialBuildings from "@/components/planets/SpecialBuildings.vue";
import ScienceBuildings from "@/components/planets/ScienceBuildings.vue";
import InConstruct from "@/components/planets/InConstruct.vue";
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import ReusableText from "@/components/reusable/text/ReusableTextForDescription.vue";
import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";


const props = defineProps<{
    isPlanetVisible: boolean
}>()
defineEmits<{
    (e: 'close'):void
}>()

const currentBuildingTab = ref(BuildingCategory.ADMINISTRATIVE)
const currentTopMenuTab = ref(TopMenu.BUILDING)
const currentComponent = shallowRef(AdministrativeBuildings)
const planetStore = usePlanetStore()
const someValue = ref(222)
const emptyStorageValue = ref(0)

let storageMaterials: MaterialInterface[] = reactive([])

onMounted(() => {
    calculateStorageCapacity()
    filteredMaterials()

})
watch(planetStore.selectedPlanet.buildings, () => {
    calculateStorageCapacity()
})

function filteredMaterials(){
    storageMaterials = planetStore.selectedPlanet.storage.filter((item:any) => item.category === StorageEntitiesCategory.MATERIAL)
}

function calculateStorageCapacity(){
    emptyStorageValue.value = 0
    planetStore.selectedPlanet.buildings.forEach((b:BuildingInterface) => {
        if(b.addStorage) emptyStorageValue.value += b.addStorage * b.count
    })
}
function showCategory(category: BuildingCategory){
    currentBuildingTab.value = category
    switch (currentBuildingTab.value){
        case BuildingCategory.ADMINISTRATIVE : currentComponent.value = AdministrativeBuildings
            break
        case BuildingCategory.MANUFACTURER : currentComponent.value = ManufacturerBuildings
            break
        case BuildingCategory.ENERGETIC : currentComponent.value = EnergyBuildings
            break
        case BuildingCategory.SCIENCES : currentComponent.value = ScienceBuildings
            break
        case BuildingCategory.SPECIAL : currentComponent.value = SpecialBuildings
            break
    }
}

</script>

<style lang="scss" scoped>
.activeButton{
  color: darkorange;
}
.building_component_wrapper{
  height: calc(100% - 28px);
}
.buildings_nav{
  width: 100%;
  display: flex;
  gap: 2px;
  height: 24px;
  & button {
    height: 100%;
    width: 100%;
  }
}
.storage {
  display: flex;
  height: calc(100% - 28px);
}
.storage__resources,
.storage__materials,
.storage__modules {
  width: 100%;
  border: 1px solid white;
  height: 100%;
  text-align: center;
  overflow: hidden;

}
.storage__column--title{
  display: block;
  min-width: 100%;
  background-color: lightblue;
  padding: 4px;
  cursor: default;
  color: black;
}
.right{
  position: relative;
  width: 100%;
}
.in_build{
  width: 100%;
  height: 30%;
  color: white;
  overflow: auto;
}
.buildings{
  width: 100%;
  height: calc(70% - 28px);
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}
.controls{
  display: flex;
  gap: 2px;
  width: 100%;
  height: 26px;
  & button {
    height: 100%;
    width: 100%;
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
.odd{
  background-color: lightblue;
}
</style>