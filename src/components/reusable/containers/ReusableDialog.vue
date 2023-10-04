<script setup lang="ts">
import {nextTick, onMounted} from "vue";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

const props = defineProps<{
    visible: boolean
    header?: string
}>()
defineEmits<{
    (e:'closeDialog'):void
}>()
onMounted(() => {
    nextTick(() => {
        const resizer = document.querySelector('.planet_resize') as HTMLElement
        resizer.addEventListener('mousedown', mousedown)
    })
})

function mousedown(mdEvent: MouseEvent) {
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)
    const currX = mdEvent.clientX
    const containerForResize = document.querySelector('.for_resize') as HTMLElement
    const blockWidth = containerForResize.clientWidth

    function mousemove(mmEvent: MouseEvent) {
        const transition = currX - mmEvent.clientX
        if(blockWidth - transition >= 320){
            containerForResize.style.width = blockWidth - transition + 'px'
        }
    }
    function mouseup(){
        window.removeEventListener('mousemove', mousemove)
    }
}

</script>

<template>
    <Dialog :header="props.header ?? ''" class="for_resize" v-model:visible="props.visible" :closable="false" :blockScroll="true" draggable style="position: relative">
        <reusable-button close_btn @push="$emit('closeDialog')"/>
        <slot />
        <div class="planet_resize"></div>
    </Dialog>
</template>

<style scoped lang="scss">
.planet_resize {
  cursor: col-resize;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
}
</style>