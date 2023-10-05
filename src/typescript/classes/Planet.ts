import {AbstractBuilding} from "@/typescript/classes/abstract classes/AbstractBuilding.ts";

export class Planet {
    constructor(public id: number, public name: string = `${id}A_${id*12}`, public points: number, public buildings: AbstractBuilding[]) {}
}