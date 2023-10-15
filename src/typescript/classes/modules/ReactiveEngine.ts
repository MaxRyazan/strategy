import {FuelTypes, ModuleCategory, Modules, Ships, ShipsCategory} from "@/typescript/enums.ts";
import {ModuleInterface} from "@/typescript/classes/interfaces_for_classes/ModuleInterface.ts";

export class ReactiveEngine implements ModuleInterface {
    constructor() {
        this.id = 1
        this.name = Modules.Reactive_Engine
        this.category = ModuleCategory.ENGINES
        this.img = 'src/images/modules/engines/reactiveEngine.png'
        this.hyperPower = 0
        this.normalPower = 10
        this.fightPower = 3
        this.weight = 10
        this.signature = 2
        this.crew = 0
        this.energy = 3
        this.fuel = {
            type: FuelTypes.RocketFuel,
            amountPerMinute: 9
        }
    }
    readonly id: number;
    readonly name: Ships
    readonly category: ShipsCategory;
    readonly img: string

    readonly hyperPower: number
    readonly normalPower: number
    readonly fightPower: number
    readonly weight: number
    readonly signature: number
    readonly crew: number
    readonly energy: number
    readonly fuel: {
        type: FuelTypes,
        amountPerMinute: number
    }
}
