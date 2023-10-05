import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {Buildings} from "@/typescript/enums.ts";
import {CREATION_TIME} from "@/constants.ts";

export class Colony implements BuildingInterface {
    constructor(public count = 0) {
        this.id = 1;
        this.name = Buildings.COLONY
        this.timeOfCreation = CREATION_TIME * 1.01
    }
    id: 1
    name: Buildings.COLONY
    timeOfCreation: number
}