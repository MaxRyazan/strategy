import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";
import {CREATION_TIME} from "@/constants.ts";
import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";

export class Colony implements BuildingInterface {
    constructor(public count = 0) {
        this.id = 1;
        this.name = Buildings.COLONY
        this.timeOfCreation = CREATION_TIME * 1.01
        this.requiredMaterials = []
    }
    readonly id: number
    readonly name: Buildings.COLONY
    readonly timeOfCreation: number
    readonly requiredMaterials: MaterialInterface[];
}