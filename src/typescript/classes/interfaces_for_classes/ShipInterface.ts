import {Ships, ShipsCategory} from "@/typescript/enums.ts";
import {ShipSlots} from "@/typescript/types.ts";
import {ModuleInterface} from "@/typescript/classes/interfaces_for_classes/ModuleInterface.ts";

export interface ShipInterface {
    id: number;
    name: Ships
    category: ShipsCategory;
    img: string
    slots: ShipSlots
    modules: Array<ModuleInterface>

    health: number
    weight: number
    signature: number
    crew: number
    energy: number
}