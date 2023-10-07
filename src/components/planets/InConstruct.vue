<script setup lang="ts">
import {BuildingsInConstruct} from "@/typescript/types.ts";

const props = defineProps<{
    item: BuildingsInConstruct
}>()
</script>

<template>
    <div style="display: flex; justify-content: space-between; padding: 2px 20px;">
        <div>{{item.id}}</div>
        <div>{{item.building.name}}</div>
        <div>{{new Date(item.willReadyAt)}}</div>
    </div>
</template>

<style scoped lang="scss">

</style>