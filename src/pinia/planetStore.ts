import {defineStore} from "pinia";
import {ref} from "vue";

export const usePlanetStore:any = defineStore('planeStore', {
    state: () => ({
        selectedPlanet: ref(null)
    })
})