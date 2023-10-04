<template>
    <reusable-button @push="$emit('openPlanet')">Planet</reusable-button>
</template>

<script setup lang="ts">

defineEmits<{
    (e: 'openPlanet'): void
}>()
</script>
<style lang="scss" scoped>

</style>