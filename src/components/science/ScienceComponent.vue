<script setup lang="ts">
import ReusableDialog from "@/components/reusable/containers/ReusableDialog.vue";
import EconomicScienceTree from "@/components/science/EconomicScienceTree.vue";
import ShipBuildingScienceTree from "@/components/science/ShipBuildingScienceTree.vue";
const props = defineProps<{
    isScienceVisible: boolean
}>()
</script>
<template>
<reusable-dialog  @closeDialog="$emit('close')" :visible="props.isScienceVisible" header="Наука и исследования" style="width: 80%; margin: 0 auto; height: 700px;">
    <div class="science">
        <economic-science-tree />
        <ship-building-science-tree />
    </div>
</reusable-dialog>
</template>

<style scoped lang="scss">
.science{
  width: 100%;
}
</style>