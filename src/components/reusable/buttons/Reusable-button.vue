<template>
    <button @click="$emit('push')" :class="{close_btn}">
        <img src="src/images/icons/closeIcon.png" alt="close" v-if="props.close_btn">
        <slot />
    </button>
</template>

<script setup lang="ts">

defineEmits<{
    (e: 'push'): void
}>()
const props = defineProps<{
    close_btn?: boolean
}>()
</script>
<style lang="scss" scoped>
.close_btn{
  position: absolute;
  top: 1px;
  right: 1px;
  width: 22px;
  height: 22px;
  padding: 0 0 2px 0;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & img {
    height: 100%;
    width: 100%;
  }
}
</style>