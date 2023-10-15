<script setup lang="ts">
import {ShipInterface} from "@/typescript/classes/interfaces_for_classes/ShipInterface.ts";

const props = defineProps<{
    ship: ShipInterface
}>()
</script>
<template>
    <div class="ship">
        <div class="ship__body">
            <div class="ship__img">
                <img :src="props.ship.img" alt="">
            </div>
            <div class="ship__slots">
                <div class="ship__slots_engines">
                    <div class="slot slot__engine" v-for="engine in props.ship.slots.engines"></div>
                </div>
                <div class="ship__slots_modules">
                    <div class="slot slot__module"  v-for="module in props.ship.slots.modules"></div>
                </div>
                <div class="ship__slots_special" v-if="props.ship.slots.special">
                    <div class="slot slot__special" v-for="special in props.ship.slots.special"></div>
                </div>
                <div class="ship__slots_weapon">
                    <div class="slot slot__weapon" v-for="weapon in props.ship.slots.weapon"></div>
                </div>
                <div class="ship__slots_armor">
                    <div class="slot slot__armor" v-for="armor in props.ship.slots.armor"></div>
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
  display: flex;
  justify-content: center;
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
</style>