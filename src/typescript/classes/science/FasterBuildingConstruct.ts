import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";
import {Bonuses, Science, ScienceCategory} from "@/typescript/enums.ts";

export class FasterBuildingConstruct implements ScienceInterface {
    constructor(public lvl: number = 0) {
        this.id = 1
        this.name = Science.Faster_Building_Construct
        this.category = ScienceCategory.ECONOMIC
        this.bonus = { bonusType: Bonuses.Faster_Building_Construct, bonusValuePerLvl: 2}
    }
    readonly id: number;
    readonly name: Science.Faster_Building_Construct;
    readonly category: ScienceCategory;
    readonly bonus: { bonusType: Bonuses.Faster_Building_Construct, bonusValuePerLvl: number}

}