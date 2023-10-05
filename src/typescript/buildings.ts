import {Colony} from "@/typescript/classes/buildings/Colony.ts";
import {ControlCenter} from "@/typescript/classes/buildings/ControlCenter.ts";


const colony = new Colony()
const controlCenter = new ControlCenter()

export default {
    administrative: [
        colony,
        controlCenter,
    ]
}
