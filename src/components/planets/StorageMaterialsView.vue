<template>
    <div class="storage__materials">
        <reusable-text class="storage__column--title">Материалы</reusable-text>
        <div style="display: flex;width: 100%; justify-content: space-between">
            <reusable-text class="item__name" style="cursor:default;  border: 1px dotted rgba(0,0,0, .3) ;  background-color: lightblue; color:black;border-top: 1px solid black;padding: 1px">Название</reusable-text>
            <reusable-text class="item__count" style="cursor:default;  border: 1px dotted rgba(0,0,0, .3) ; background-color: lightblue; color:black;border-top: 1px solid black;padding: 1px">Количество</reusable-text>
            <reusable-text class="item__weight" style="cursor:default;  border: 1px dotted rgba(0,0,0, .3) ;background-color: lightblue; color:black;border-top: 1px solid black;padding: 1px">Вес</reusable-text>
        </div>
        <div class="container">
            <div class="container__item" v-for="material in props.materials" :key="material.id">
                <div class="storage_item item__name" v-if="material.count > 0">
                    <reusable-text class="container_item">{{material.name }}</reusable-text>
                </div>
                <div class="storage_item item__count" v-if="material.count > 0">
                    <reusable-text class="container_item">{{ material.count }}</reusable-text>
                </div>
                <div class="storage_item item__weight" v-if="material.count > 0">
                    <reusable-text class="container_item">{{material.count * material.weight }}</reusable-text>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";


const props = defineProps<{
    materials: MaterialInterface[]
}>()
console.log(props.materials)
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
}
.container__item{
  width: 100%;
  display: flex;
  cursor: default;
  &:hover{
    background-color: lightblue;
  }
}
.storage__materials{
  width: 100%;
  border: 1px solid white;
  text-align: center;
}
.storage_item {
  width: 100%;
  border-left: 1px dotted rgba(173, 216, 230, .3);
}
.container_item {
  width: 100%;
  white-space: nowrap;
  display: block;
  color: white;
  padding: 3px 1%;
  overflow: hidden;
}
.item__name {
  width: 60%;
}

.item__count {
  width: 20%;
}

.item__weight {
  width: 20%;
}

.storage__column--title {
  display: block;
  min-width: 100%;
  background-color: lightblue;
  padding: 4px;
  cursor: default;
  color: black;
}

</style>