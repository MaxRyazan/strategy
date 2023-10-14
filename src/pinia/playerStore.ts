import {defineStore, StoreDefinition} from "pinia";
import {Player} from "@/typescript/classes/Player.ts";

interface StoreData {
    player: Player | null,
}

export const usePlayerStore: StoreDefinition<'playerStore'> = defineStore('playerStore', {
    state: (): StoreData => ({
        player: null,
    })
})