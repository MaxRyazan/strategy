<template>
    <div class="storage__resources">
        <reusable-text class="storage__column--title">Ресурсы</reusable-text>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    resources: any[]
}>()
</script>
<style lang="scss" scoped>
.storage__resources{
  width: 100%;
  border: 1px solid white;
}
.storage__column--title {
  text-align: center;
  display: block;
  width: 100%;
  background-color: lightblue;
  padding: 4px;
  cursor: default;
  color: black;
}

</style>