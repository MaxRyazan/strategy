import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {BuildingsInConstruct} from "@/typescript/types.ts";

export interface PlanetInterface {
    id: number
    name: string
    points: number
    buildings: BuildingInterface[]
    buildingsInConstruct: BuildingsInConstruct[]
    buildingsInDestruct: BuildingsInConstruct[]
}