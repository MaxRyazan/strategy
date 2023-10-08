import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";
import {Materials, StorageEntitiesCategory} from "@/typescript/enums.ts";

export class Electronic implements MaterialInterface {
    constructor(public count: number = 0) {
        this.id = 2;
        this.name = Materials.Electronic
        this.category = StorageEntitiesCategory.MATERIAL
        this.weight = 6
    }
    readonly id: number;
    readonly name: string;
    readonly category: StorageEntitiesCategory.MATERIAL;
    readonly weight: number;

}