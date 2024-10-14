import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: "YeerloCreator",
    state: ()=> ({
        creatorInformation: {},
    }),
    actions:{
        setCreatorInformation(payload){
            this.creatorInformation = payload;    
        }
    },
    persist: persistedState.localStorage
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}