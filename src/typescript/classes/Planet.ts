import {BuildingInterface} from "@/typescript/classes/interfaces_for_classes/BuildingInterface.ts";
import {BuildingsInConstruct} from "@/typescript/types.ts";
import {PlanetInterface} from "@/typescript/classes/interfaces_for_classes/PlanetInterface.ts";

export class Planet implements PlanetInterface {
    constructor(
        public id: number,
        public name: string = `${id}A_${id*12}`,
        public points: number,
        public buildings: BuildingInterface[],
        public buildingsInConstruct: BuildingsInConstruct[],
        public buildingsInDestruct: BuildingsInConstruct[]
    )
    {}
}