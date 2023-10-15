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
        this.health = 100
        this.weight = 100
        this.signature = 10
        this.crew = 1
        this.energy = 0
    }
    readonly id: number;
    readonly name: Ships
    readonly category: ShipsCategory;
    readonly slots: ShipSlots
    readonly img: string

    readonly health: number
    readonly weight: number
    readonly signature: number
    readonly crew: number
    readonly energy: number
}
