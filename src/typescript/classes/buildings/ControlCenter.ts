import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";
import {CREATION_TIME} from "@/constants.ts";
import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";
import {ConstructionMaterials} from "@/typescript/classes/materials/ConstructionMaterials.ts";
import {Electronic} from "@/typescript/classes/materials/Electronic.ts";

export class ControlCenter implements BuildingInterface {
    constructor(public count = 0) {
        this.id = 2
        this.name = Buildings.CONTROL_CENTER
        this.timeOfCreation = CREATION_TIME * 1.02
        this.requiredMaterials = [new ConstructionMaterials(5), new Electronic(2)]
        this.addStorage = 1000
    }

    readonly id: number
    readonly name: Buildings.CONTROL_CENTER
    readonly timeOfCreation: number
    readonly requiredMaterials: MaterialInterface[];
    readonly addStorage: number
}