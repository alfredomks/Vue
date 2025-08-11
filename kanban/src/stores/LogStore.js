import { defineStore } from "pinia";

export const useLogStore=defineStore('logStore',{
    state:()=>({
        lista_log:[
            {"id":1,"fecha":"2025-01-12","estado":"POR HACER","usuario":"Juan","color":"red","comentario":"Comementario de Juan "},
            {"id":2,"fecha":"2025-01-14","estado":"HACIENDO","usuario":"Pedro","color":"blue","comentario":"Comementario de Pedro "},
            {"id":3,"fecha":"2025-01-15","estado":"HACIENDO","usuario":"Marta","color":"yellow","comentario":"Comementario de Marta "},
            {"id":4,"fecha":"2025-01-16","estado":"POR HACER","usuario":"Pablo","color":"orange","comentario":"Comementario de Pablo "},
        ],
        visible:false,
    }),

    getters:{
        getLog(state){
            return state.lista_tareas;
        }
    },
    actions:{
        addLog(){
            
        }
    }
})