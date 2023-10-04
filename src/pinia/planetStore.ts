import {defineStore} from "pinia";
import {ref} from "vue";

const usePlanetStore:any = defineStore('planeStore', {
    state: () => ({
        selectedPlanet: ref(null)
    })
})