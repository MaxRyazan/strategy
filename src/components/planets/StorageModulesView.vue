<template>
    <div class="storage__modules">
        <reusable-text class="storage__column--title">Модули</reusable-text>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    modules: any
}>()
</script>
<style lang="scss" scoped>
.storage__modules{
  border: 1px solid white;
  width: 100%;
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