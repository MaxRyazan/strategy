import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";
import {Bonuses} from "@/typescript/enums.ts";

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

export interface BONUS_VALUE {
    bonusType: Bonuses,
    size: number
}

export interface ShipSlots{
    engines: number,
    modules: number,
    weapon: number,
    armor: number,
    special?: number
}