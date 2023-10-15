import {ShipInterface} from "@/typescript/classes/interfaces_for_classes/ShipInterface.ts";
import {Ships, ShipsCategory} from "@/typescript/enums.ts";
import {ShipSlots} from "@/typescript/types.ts";

export class Fighter implements ShipInterface {
    constructor() {
        this.id = 1
        this.name = Ships.Fighter
        this.category = ShipsCategory.MILITARY
        this.slots = {
            engines: 2,
            modules: 2,
            weapon: 2,
            armor: 2
        }
        this.img = 'src/images/ships/fighter.png'
    }
    readonly id: number;
    readonly name: Ships
    readonly category: ShipsCategory;
    readonly slots: ShipSlots
    readonly img: string
}
