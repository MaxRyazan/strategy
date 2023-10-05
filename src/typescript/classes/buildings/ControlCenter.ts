import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";

export class ControlCenter implements BuildingInterface {
    readonly id: 2
    readonly name: Buildings.CONTROL_CENTER
    constructor(public count = 1) {
        this.id = 2
        this.name = Buildings.CONTROL_CENTER
    }
}