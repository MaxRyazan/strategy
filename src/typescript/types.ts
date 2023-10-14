import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";

export interface BuildingsInConstruct {
    building: BuildingInterface,
    willReadyAt: number
    forDestroy: boolean
    id: number
}

export interface ScienceInResearch {
    timeWhenReady: number,
    science: ScienceInterface
}