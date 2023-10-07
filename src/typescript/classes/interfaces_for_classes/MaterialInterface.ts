import {StorageEntitiesCategory} from "@/typescript/enums.ts";

export interface MaterialInterface {
    id: number,
    name: string,
    count: number,
    category: StorageEntitiesCategory.MATERIAL
    weight: number
}