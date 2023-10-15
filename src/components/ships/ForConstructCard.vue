<script setup lang="ts">
import {ShipInterface} from "@/typescript/classes/interfaces_for_classes/ShipInterface.ts";
import ReusableText from "@/components/reusable/text/ReusableTextForDescription.vue";
import {ref} from "vue";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

const freeSlots = ref(0)
const props = defineProps<{
    ship: ShipInterface
}>()

function deleteSlot(slotType: string){
    freeSlots.value += 1
    switch (slotType){
        case 'engine': props.ship.slots.engines -= 1;
        break
        case 'module': props.ship.slots.modules -= 1;
        break
        case 'special': props.ship.slots.special -= 1;
        break
        case 'weapon': props.ship.slots.weapon -= 1;
        break
        case 'armor': props.ship.slots.armor -= 1;
        break
    }
}
function addSlot(slotType: string){
    if(!freeSlots.value) return
    freeSlots.value -= 1
    switch (slotType){
        case 'engine': props.ship.slots.engines += 1;
        break
        case 'module': props.ship.slots.modules += 1;
        break
        case 'special': props.ship.slots.special += 1;
        break
        case 'weapon': props.ship.slots.weapon += 1;
        break
        case 'armor': props.ship.slots.armor += 1;
        break
    }
}
</script>
<template>
    <div class="ship">
        <div class="ship__body">
            <div class="ship__img">
                <img :src="props.ship.img" alt="">
            </div>
            <reusable-text style="color: white" v-if="freeSlots">Свободных слотов: {{freeSlots}}</reusable-text>
            <div class="ship__slots">
                <div class="ship__slots_engines">
                    <reusable-button @push="addSlot('engine')" class="add_slot_btn">+</reusable-button>
                    <div @contextmenu.prevent="deleteSlot('engine')" class="slot slot__engine" v-for="engine in props.ship.slots.engines"></div>
                </div>
                <div class="ship__slots_modules">
                    <reusable-button @push="addSlot('module')" class="add_slot_btn">+</reusable-button>
                    <div @contextmenu.prevent="deleteSlot('module')" class="slot slot__module"  v-for="module in props.ship.slots.modules"></div>
                </div>
                <div class="ship__slots_special" v-if="props.ship.slots.special">
                    <reusable-button @push="addSlot('special')" class="add_slot_btn">+</reusable-button>
                    <div @contextmenu.prevent="deleteSlot('special')" class="slot slot__special" v-for="special in props.ship.slots.special"></div>
                </div>
                <div class="ship__slots_weapon">
                    <reusable-button @push="addSlot('weapon')" class="add_slot_btn">+</reusable-button>
                    <div @contextmenu.prevent="deleteSlot('weapon')" class="slot slot__weapon" v-for="weapon in props.ship.slots.weapon"></div>
                </div>
                <div class="ship__slots_armor">
                    <reusable-button @push="addSlot('armor')" class="add_slot_btn">+</reusable-button>
                    <div @contextmenu.prevent="deleteSlot('armor')" class="slot slot__armor" v-for="armor in props.ship.slots.armor"></div>
                </div>
            </div>
        </div>
        <div class="ship__params">

        </div>
    </div>
</template>

<style scoped lang="scss">
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
</style>