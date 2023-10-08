import {Planet} from "@/typescript/classes/Planet.ts";
import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";

export class Account {
    homePlanet: Planet = {} as any
    colonies: Planet[] = []
    science: ScienceInterface[] = []
    SP: number = 10
    currentInResearch: any = {}
}