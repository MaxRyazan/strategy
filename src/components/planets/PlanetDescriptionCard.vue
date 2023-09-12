<template>
    <div class="left__item">
        <div class="left__item--icon">
            <img class="left__icon" :src="`./src/images/icons/${icon}`" alt="lightning">
            <reusable-text-for-description>{{props.text}}</reusable-text-for-description>
        </div>
        <reusable-text-for-description>{{props.variableValue}}</reusable-text-for-description>
    </div>
</template>
<script setup lang="ts">
import ReusableTextForDescription from '@/components/reusable/text/ReusableTextForDescription.vue'
import {defineProps} from 'vue'
const props = defineProps<{
    variableValue: number
    text: string
    icon: string
}>()
</script>
<style lang="scss" scoped>

.left__item {
  cursor: default;
  display: flex;
  padding: 0 5%;
  justify-content: space-between;

  &:hover {
    background-color: cornflowerblue;
  }
}

.left__item--icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
}

.left__icon {
  width: 15px;
  height: 15px;
}
</style>