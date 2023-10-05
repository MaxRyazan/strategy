import {defineStore} from "pinia";
import {Planet} from "@/typescript/classes/Planet.ts";

interface StoreTypes {
    selectedPlanet: Planet | null
}

export const usePlanetStore: any = defineStore('planeStore', {
    state: (): StoreTypes => ({
        selectedPlanet: null
    })
})