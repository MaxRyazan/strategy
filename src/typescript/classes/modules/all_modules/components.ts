import {ReactiveEngine} from "@/typescript/classes/modules/ReactiveEngine.ts";
import {ModuleInterface} from "@/typescript/classes/interfaces_for_classes/ModuleInterface.ts";

export default {
    engines: [
        new ReactiveEngine()
    ] as ModuleInterface[],
    modules: []as ModuleInterface[],
    weapons: [] as ModuleInterface[],
    armors: []as ModuleInterface[],
}