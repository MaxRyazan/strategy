import {MaterialInterface} from "@/typescript/classes/interfaces_for_classes/MaterialInterface.ts";
import {Materials, StorageEntitiesCategory} from "@/typescript/enums.ts";

export class ConstructionMaterials implements  MaterialInterface{
    constructor(public count: number = 0) {
        this.id = 1;
        this.name = Materials.Construction_Materials
        this.category = StorageEntitiesCategory.MATERIAL
        this.weight = 4
    }
    readonly id: number;
    readonly name: string;
    readonly category: StorageEntitiesCategory.MATERIAL;
    readonly weight: number;

}