import {Ships, ShipsCategory} from "@/typescript/enums.ts";
import {ShipSlots} from "@/typescript/types.ts";

export interface ShipInterface {
    id: number;
    name: Ships
    category: ShipsCategory;
    img: string
    slots: ShipSlots
}