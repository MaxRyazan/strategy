import {Bonuses, ScienceCategory} from "@/typescript/enums.ts";

export interface ScienceInterface {
    id: number
    name: string
    lvl: number
    category: ScienceCategory
    bonus: { bonusType: Bonuses, bonusValuePerLvl: number}
}