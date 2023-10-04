import {defineStore} from "pinia";
import {ref} from "vue";

export const usePlayerStore: any = defineStore('playerStore', {
    state: () => ({
        player: ref(null)
    })
})