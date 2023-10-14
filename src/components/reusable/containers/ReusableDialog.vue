<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from "vue";
import ReusableButton from "@/components/reusable/buttons/Reusable-button.vue";

const currentWidth = ref()
const fontSize = ref()

const props = defineProps<{
    visible: boolean
    header?: string
}>()
defineEmits<{
    (e:'closeDialog'):void
}>()

const adaptive = () => {
    const containerForResize: HTMLElement = document.querySelector('.for_resize')
    currentWidth.value = containerForResize.clientWidth
    if(currentWidth.value >= 1600) fontSize.value = 16
    if(currentWidth.value < 1600) fontSize.value = 14
    if(currentWidth.value >= 1024 && currentWidth.value < 1600) fontSize.value = 14
    if(currentWidth.value < 1024) fontSize.value = 12
    if(currentWidth.value >= 800 && currentWidth.value < 1024) fontSize.value = 12
    if(currentWidth.value < 800) fontSize.value = 10
    containerForResize.style.fontSize = fontSize.value + 'px'
}

watch(currentWidth, () => {
    adaptive()
})

onMounted(() => {
    nextTick(() => {
        window.addEventListener('resize', adaptive)
        const resizer: HTMLElement = document.querySelector('.planet_resize') as HTMLElement
        resizer.addEventListener('mousedown', mousedown)
        adaptive()
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
        currentWidth.value = blockWidth - transition
        if(blockWidth - transition >= 640){
            containerForResize.style.width = blockWidth - transition + 'px'
            adaptive()
        }
    }
    function mouseup(){
        window.removeEventListener('mousemove', mousemove)
    }
}

</script>

<template>
    <Dialog :header="props.header ?? ''" class="for_resize" v-model:visible="props.visible" :closable="false" :blockScroll="true" draggable style="position: relative;background-color: black;">
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