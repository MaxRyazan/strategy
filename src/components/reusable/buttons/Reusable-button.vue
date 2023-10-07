<template>
    <button @click="$emit('push')" :class="{close_btn, in_card_button}">
        <img src="src/images/icons/closeIcon.png" alt="close" v-if="props.close_btn">
        <slot/>
    </button>
</template>

<script setup lang="ts">

defineEmits<{
    (e: 'push'): void
}>()
const props = defineProps<{
    close_btn?: boolean
    in_card_button?: boolean
}>()
</script>
<style lang="scss" scoped>
.close_btn {
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

.in_card_button {
  height: 24px;
  width: 100%;
  color: white;
  cursor: pointer;
  background-color: $primeViolet;
  border: 1px solid white;
  border-left: none;
  &:hover {
    background-color: $secondViolet;
  }

}
</style>