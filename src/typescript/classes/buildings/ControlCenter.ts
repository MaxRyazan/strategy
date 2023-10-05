import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";

export class ControlCenter implements BuildingInterface {
    constructor(public id: 2, public name: Buildings.CONTROL_CENTER, public count: 0) {}
}