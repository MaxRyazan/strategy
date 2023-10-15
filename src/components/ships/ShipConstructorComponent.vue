<script setup lang="ts">
import {ShipInterface} from "@/typescript/classes/interfaces_for_classes/ShipInterface.ts";
import ReusableText from "@/components/reusable/text/ReusableTextForDescription.vue";
import {computed, Ref, ref} from "vue";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";
import ReusableDialog from "@/components/reusable/containers/ReusableDialog.vue";
import {Fighter} from "@/typescript/classes/ships/Fighter.ts";
import components from "@/typescript/classes/modules/all_modules/components.ts";
import {ModuleInterface} from "@/typescript/classes/interfaces_for_classes/ModuleInterface.ts";
import {EngineTypes, ModuleCategory} from "@/typescript/enums.ts";

const chosenShipBody: Ref<ShipInterface> = ref(new Fighter())
const freeSlots = ref(0)
const enginesInProject = ref({
    hyper: [] as ModuleInterface[],
    nuclear: [] as ModuleInterface[],
    reactive: [] as ModuleInterface[],
})
const props = defineProps<{
    isShipConstructorVisible: boolean
}>()

function deleteSlot(slotType: string){
    freeSlots.value += 1
    switch (slotType){
        case 'engine': chosenShipBody.value.slots.engines -= 1;
        break
        case 'module': chosenShipBody.value.slots.modules -= 1;
        break
        case 'special': if(chosenShipBody.value.slots.special)chosenShipBody.value.slots.special -= 1;
        break
        case 'weapon': chosenShipBody.value.slots.weapon -= 1;
        break
        case 'armor': chosenShipBody.value.slots.armor -= 1;
        break
    }
}
function addSlot(slotType: string){
    if(!freeSlots.value) return
    freeSlots.value -= 1
    switch (slotType){
        case 'engine': chosenShipBody.value.slots.engines += 1;
        break
        case 'module': chosenShipBody.value.slots.modules += 1;
        break
        case 'special': if(chosenShipBody.value.slots.special)chosenShipBody.value.slots.special += 1;
        break
        case 'weapon': chosenShipBody.value.slots.weapon += 1;
        break
        case 'armor': chosenShipBody.value.slots.armor += 1;
        break
    }
}

const health = computed(() => {
    return chosenShipBody.value.health
})
const weight = computed(() => {
    let spec = 0
    if(chosenShipBody.value.slots.special) {
        spec = chosenShipBody.value.slots.special * 10
    }
    return chosenShipBody.value.weight + chosenShipBody.value.slots.engines * 10
        + chosenShipBody.value.slots.modules * 10
        + chosenShipBody.value.slots.weapon * 10
        + chosenShipBody.value.slots.armor * 10
        + spec
})
const signature = computed(() => {
    return chosenShipBody.value.signature
})
const crew = computed(() => {
    return chosenShipBody.value.crew
})
const energy = computed(() => {
    return chosenShipBody.value.energy
})

//TODO двигатели в КБ
const hyperSpeed = computed(() => {
    const hyperEngines = enginesInProject.value.hyper
    return hyperEngines.length * 10
})
const normalSpeed = computed(() => {
    const nuclearEngines = enginesInProject.value.nuclear
    const reactiveEngines = enginesInProject.value.reactive
    return nuclearEngines.length * 10 + reactiveEngines.length * 3
})
const fightSpeed = computed(() => {
    const nuclearEngines = enginesInProject.value.nuclear
    const reactiveEngines = enginesInProject.value.reactive
    return nuclearEngines.length * 0.1 + reactiveEngines.length * 0.03
})

function addModuleToProject(module: ModuleInterface){
    if(module.category === ModuleCategory.ENGINES) {
        if(chosenShipBody.value.slots.engines > enginesInProject.value.hyper.length + enginesInProject.value.nuclear.length + enginesInProject.value.reactive.length) {
            if(module.engineType === EngineTypes.Reactive) {
                enginesInProject.value.reactive.push(module)
            }
        }
    }
}
</script>
<template>
    <reusable-dialog  @closeDialog="$emit('close')" :visible="props.isShipConstructorVisible" header="Бюро проектировки кораблей" style="width: 80%; margin: 0 auto; height: 700px; position: relative">
        <div class="wrapper">
            <div class="left">
                <div class="ship">
                    <div class="ship__body">
                        <div class="ship__img">
                            <img :src="chosenShipBody.img" alt="">
                        </div>
                        <reusable-text style="color: white" v-if="freeSlots">Свободных слотов: {{freeSlots}}</reusable-text>
                        <div class="ship__slots">
                            <div class="ship__slots_engines">
                                <reusable-button @push="addSlot('engine')" class="add_slot_btn">+</reusable-button>
                                <div @contextmenu.prevent="deleteSlot('engine')" class="slot slot__engine" v-for="engine in chosenShipBody.slots.engines" :key="engine">
                                    {{engine}}
                                </div>
                            </div>
                            <div class="ship__slots_modules">
                                <reusable-button @push="addSlot('module')" class="add_slot_btn">+</reusable-button>
                                <div @contextmenu.prevent="deleteSlot('module')" class="slot slot__module"  v-for="module in chosenShipBody.slots.modules" :key="module"></div>
                            </div>
                            <div class="ship__slots_special" v-if="chosenShipBody.slots.special">
                                <reusable-button @push="addSlot('special')" class="add_slot_btn">+</reusable-button>
                                <div @contextmenu.prevent="deleteSlot('special')" class="slot slot__special" v-for="special in chosenShipBody.slots.special" :key="special"></div>
                            </div>
                            <div class="ship__slots_weapon">
                                <reusable-button @push="addSlot('weapon')" class="add_slot_btn">+</reusable-button>
                                <div @contextmenu.prevent="deleteSlot('weapon')" class="slot slot__weapon" v-for="weapon in chosenShipBody.slots.weapon" :key="weapon"></div>
                            </div>
                            <div class="ship__slots_armor">
                                <reusable-button @push="addSlot('armor')" class="add_slot_btn">+</reusable-button>
                                <div @contextmenu.prevent="deleteSlot('armor')" class="slot slot__armor" v-for="armor in chosenShipBody.slots.armor" :key="armor"></div>
                            </div>
                        </div>
                    </div>
                    <div class="ship__params">
                        <div class="base__params">
                            <div class="ship__params_item item">
                                <reusable-text>Прочность:</reusable-text>
                                <reusable-text>{{health}}</reusable-text>
                            </div>
                            <div class="ship__params_item item">
                                <reusable-text>Масса:</reusable-text>
                                <reusable-text>{{weight}}</reusable-text>
                            </div>
                            <div class="ship__params_item item">
                                <reusable-text>Сигнатура:</reusable-text>
                                <reusable-text>{{signature}}</reusable-text>
                            </div>
                            <div class="ship__params_item item">
                                <reusable-text>Экипаж:</reusable-text>
                                <reusable-text>{{crew}}</reusable-text>
                            </div>
                            <div class="ship__params_item item">
                                <reusable-text>Энергия:</reusable-text>
                                <reusable-text :class="{sub_zero:energy<0,below_zero:energy>0}">{{energy}}</reusable-text>
                            </div>
                        </div>
                        <div class="speed">
                            <reusable-text>Скоростные характеристики корабля:</reusable-text>
                            <div class="ship__params_item item">
                                <reusable-text>Гиперпространство:</reusable-text>
                                <reusable-text>{{hyperSpeed}}</reusable-text>
                            </div>
                            <div class="ship__params_item item">
                                <reusable-text>Межзвёздная:</reusable-text>
                                <reusable-text>{{normalSpeed}}</reusable-text>
                            </div>
                            <div class="ship__params_item item">
                                <reusable-text>Сражение:</reusable-text>
                                <reusable-text>{{fightSpeed}}</reusable-text>
                            </div>
                        </div>
                        <div class="attack">
                            <reusable-text>Огневые возможности корабля:</reusable-text>
                        </div>
                        <div class="armor">
                            <reusable-text>Защитные возможности корабля:</reusable-text>
                        </div>
                        <div class="info">
                            <reusable-text>Прочая информация:</reusable-text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div v-for="engine in components.engines" :key="engine.id">
                    <div @click="addModuleToProject(engine)" class="slot slot__engine">
                        <div class="modules__img">
                            <img :src="engine.img" alt="">
                        </div>
                    </div>
                </div>
                <div v-for="module in components.modules" :key="module.id">
                    <div @click="addModuleToProject(module)" class="slot slot__engine">
                        <div class="modules__img">
                            <img :src="module.img" alt="">
                        </div>
                    </div>
                </div>
                <div v-for="weapon in components.weapons" :key="weapon.id">
                    <div @click="addModuleToProject(weapon)" class="slot slot__engine">
                        <div class="modules__img">
                            <img :src="weapon.img" alt="">
                        </div>
                    </div>
                </div>
                <div v-for="armor in components.armors" :key="armor.id">
                    <div @click="addModuleToProject(armor)" class="slot slot__engine">
                        <div class="modules__img">
                            <img :src="armor.img" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </reusable-dialog>
</template>

<style scoped lang="scss">
.wrapper{
  display: flex;
  width: 100%;
  height: 670px;
}
.left,
.right{
  color: white;
  width: 100%;
  padding: 3px;
  border: 1px solid red;
  height: 100%;
}
.left{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.speed,
.attack,
.armor,
.info {
  margin-top: 20px;
  border: 1px dotted rgba(255, 255, 255, 0.3)
}
.ship{
  display: flex;
  height: 100%;
  gap: 5px;
}
.ship__body,
.ship__params{
  height: 100%;
  width: 50%;
  border: 1px dotted white;
}
.ship__img{
  width: 100%;
  min-width: 150px;
  max-width: 350px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
}
.ship__slots{
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.ship__slots_engines,
.ship__slots_modules,
.ship__slots_special,
.ship__slots_weapon,
.ship__slots_armor{
  min-height: 50px;
  padding: 0 0 0 40px;
  border: 1px solid rgba(255, 165, 0, .1);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;

}
.slot{
  width: 50px;
  height: 50px;
  cursor: default;
  &__engine{
   border: 1px solid rgba(255, 165, 0, .3);
    &:hover {
      border: 1px solid rgba(255, 165, 0, .7);
    }
  }
  &__module{
   border: 1px solid rgba(83, 189, 0, .3);
    &:hover {
      border: 1px solid rgba(83, 189, 0, .7);
    }
  }
  &__special{
   border: 1px solid rgba(255, 255, 255, .3);
    &:hover {
      border: 1px solid rgba(255, 255, 255, .7);
    }
  }
  &__weapon{
   border: 1px solid rgba(135, 1, 1, .3);
    &:hover {
      border: 1px solid rgba(135, 1, 1, .7);
    }
  }
  &__armor{
   border: 1px solid rgba(0, 49, 143, .5);
    &:hover {
      border: 1px solid rgba(0, 49, 143, .8);
    }
  }
}
.add_slot_btn{
  position: absolute;
  left: 3px;
  height: 30px;
  width: 30px;
}
.ship__params_item{
  width: 100%;
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.sub_zero{
  color: red;
}
.below_zero{
  color: green;
}
.modules__img{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 96%;
  }
}
</style>