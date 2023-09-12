<template>
    <reusable-button @push="$emit('openPlanet')">Planet</reusable-button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue'

defineEmits<{
    (e: 'openPlanet'): void
}>()
</script>
<style lang="scss" scoped>

</style>