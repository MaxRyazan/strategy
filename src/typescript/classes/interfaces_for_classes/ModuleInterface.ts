import {EngineTypes, FuelTypes, ModuleCategory, Modules} from "@/typescript/enums.ts";

export interface ModuleInterface {
    readonly id: number;
    readonly name: Modules
    readonly category: ModuleCategory;
    readonly engineType: EngineTypes;
    readonly img: string

    readonly hyperPower: number
    readonly normalPower: number
    readonly fightPower: number
    readonly weight: number
    readonly signature: number
    readonly crew: number
    readonly energy: number
    readonly fuel: {
        type: FuelTypes,
        amountPerMinute: number
    }
}