import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";
import {CREATION_TIME} from "@/constants.ts";

export class ControlCenter implements BuildingInterface {
    readonly id: 2
    readonly name: Buildings.CONTROL_CENTER
    readonly timeOfCreation: number
    constructor(public count = 0) {
        this.id = 2
        this.name = Buildings.CONTROL_CENTER
        this.timeOfCreation = CREATION_TIME * 1.02
    }
}