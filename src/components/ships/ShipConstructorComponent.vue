<script setup lang="ts">
import ReusableDialog from "@/components/reusable/containers/ReusableDialog.vue";
import {Fighter} from "@/typescript/classes/ships/Fighter.ts";
import ForConstructCard from "@/components/ships/ForConstructCard.vue";
import {ref} from "vue";
import {ShipInterface} from "@/typescript/classes/interfaces_for_classes/ShipInterface.ts";
const props = defineProps<{
    isShipConstructorVisible: boolean
}>()
const shipToConstruct: ShipInterface = ref(new Fighter())

</script>

<template>
    <reusable-dialog  @closeDialog="$emit('close')" :visible="props.isShipConstructorVisible" header="Бюро проектировки кораблей" style="width: 80%; margin: 0 auto; height: 700px; position: relative">
        <div class="wrapper">
            <div class="left">
                <for-construct-card :ship="shipToConstruct"/>
            </div>
            <div class="right">
                Модули
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
</style>