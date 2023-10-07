import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";

export interface BuildingsInConstruct {
    building: BuildingInterface,
    willReadyAt: number
    forDestroy: boolean
    id: number
}