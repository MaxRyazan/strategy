import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";

export interface BuildingInterface {
    id: number,
    name: string,
    count: number,
    timeOfCreation: number,
    requiredMaterials: MaterialInterface[]

    addStorage?: number
}