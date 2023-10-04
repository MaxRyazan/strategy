<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import HeaderControlsButtons from '@/components/header/HeaderControlsButtons.vue'
import PlanetComponent from "@/components/planets/PlanetComponent.vue";

const isPlanetVisible = ref(false)


function mousedown(mdEvent: MouseEvent) {
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)
    const currX = mdEvent.clientX
    const containerForResize = document.querySelector('.planet') as HTMLElement
    const blockWidth = containerForResize.clientWidth

    function mousemove(mmEvent: MouseEvent) {
        const transition = currX - mmEvent.clientX
        containerForResize.style.width = blockWidth - transition + 'px'
    }
    function mouseup(){
        window.removeEventListener('mousemove', mousemove)
    }
}

watch(isPlanetVisible, () => {
    nextTick(() => {
        const resizer = document.querySelector('.planet_resize') as HTMLElement
        resizer.addEventListener('mousedown', mousedown)
    })
})


</script>

<template>
    <div class="main_wrapper">
        <header-controls-buttons @openPlanet="isPlanetVisible=!isPlanetVisible"/>
        <planet-component @close="isPlanetVisible=false" class="planet" :is-planet-visible="isPlanetVisible"
                          v-if="isPlanetVisible"/>
    </div>
</template>

<style scoped lang="scss">
.main_wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
}
</style>
