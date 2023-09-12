<template>
    <button @click="$emit('push')">
        <slot />
    </button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue'

defineEmits<{
    (e: 'push'): void
}>()
</script>
<style lang="scss" scoped>

</style>