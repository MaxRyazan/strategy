import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {Player} from "@/typescript/classes/Player.ts";

export const usePlayerStore: any = defineStore('playerStore', {
    state: (): {player: Ref<Player|null>} => ({
        player: ref(null)
    })
})