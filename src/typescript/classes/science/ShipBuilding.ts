import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";
import {Science, ScienceCategory} from "@/typescript/enums.ts";

export class ShipBuilding implements ScienceInterface {
    constructor(public lvl: number = 0) {
        this.id = 2
        this.name = Science.ShipBuilding
        this.category = ScienceCategory.ShipBuilding
        this.price = 20
    }
    readonly id: number;
    readonly name: Science.ShipBuilding;
    readonly category: ScienceCategory;
    readonly price: number
}

/**
 *
 * 0 - 20
 * 1 - 20 + 30 * (1 * 1.1) = 53
 * 2 - 20 + 30 * (2 * 1.1) = 86
 * 3 - 20 + 30 * (3 * 1.1) = 119
 *    ...
 * 100 - 20 + 30 * (100 * 1.1) = 3320
 *    ...
 * 1000 - 20 + 30 * (1000 * 1.1) = 33020
 *
 */