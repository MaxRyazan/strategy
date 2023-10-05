import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";

export class Colony implements BuildingInterface {
    id: 1
    name: Buildings.COLONY
    constructor(public count = 1) {
        this.id = 1;
        this.name = Buildings.COLONY
    }
}