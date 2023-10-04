import {defineStore} from "pinia";
import {ref} from "vue";

export const usePlayerStore: any = defineStore('playerStore', {
    state: (): any => ({
        player: ref(null)
    })
})