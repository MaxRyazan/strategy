import {defineStore} from "pinia";
import {Planet} from "@/typescript/classes/Planet.ts";
import buildings from "@/typescript/buildings.ts";
import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";

interface StoreTypes {
    selectedPlanet: Planet | null,
    administrativeBuildings: BuildingInterface[]
}

export const usePlanetStore: any = defineStore('planeStore', {
    state: (): StoreTypes => ({
        selectedPlanet: null,
        administrativeBuildings: buildings.administrative
    })
})