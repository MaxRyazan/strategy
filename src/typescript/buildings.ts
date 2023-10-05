import {Buildings} from "@/typescript/enums.ts";
import {Colony} from "@/typescript/classes/buildings/Colony.ts";
import {ControlCenter} from "@/typescript/classes/buildings/ControlCenter.ts";


const colony = new Colony(1, Buildings.COLONY)
const controlCenter = new ControlCenter(2, Buildings.CONTROL_CENTER)
const test = new ControlCenter(3, Buildings.CONTROL_CENTER)
const test2 = new ControlCenter(4, Buildings.CONTROL_CENTER)
export default {
    administrative: [
        colony,
        controlCenter,
        test,
        test2,
    ]
}
