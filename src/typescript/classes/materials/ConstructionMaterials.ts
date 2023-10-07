import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";
import {Materials} from "@/typescript/enums.ts";

export class ConstructionMaterials implements  MaterialInterface{
    constructor(public count: number = 0) {
        this.id = 1;
        this.name = Materials.Construction_Materials
    }
    readonly id: number;
    readonly name: string;

}