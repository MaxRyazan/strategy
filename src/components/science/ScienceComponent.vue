<script setup lang="ts">
import ReusableDialog from "@/components/reusable/containers/ReusableDialog.vue";
const props = defineProps<{
    isScienceVisible: boolean
}>()
</script>
<template>
<reusable-dialog  @closeDialog="$emit('close')" :visible="props.isScienceVisible" header="Наука и исследования" style="width: 80%; margin: 0 auto">
    <div>111111111</div>
</reusable-dialog>
</template>

<style scoped lang="scss">

</style>