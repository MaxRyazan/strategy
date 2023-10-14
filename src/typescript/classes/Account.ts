import {Planet} from "@/typescript/classes/Planet.ts";
import {ScienceInterface} from "@/typescript/classes/interfaces_for_classes/ScienceInterface.ts";
import {BONUS_VALUE, ScienceInResearch} from "@/typescript/types.ts";

export class Account {
    homePlanet: Planet = {} as any
    colonies: Planet[] = []
    science: ScienceInterface[] = []
    SP: number = 0
    currentInResearch: ScienceInResearch | null = null
    bonuses: BONUS_VALUE[] = []
}