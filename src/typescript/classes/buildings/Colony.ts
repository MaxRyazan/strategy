import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";

export class Colony implements BuildingInterface {
    constructor(public id: 1, public name: Buildings.COLONY, public count: 0) {}
}