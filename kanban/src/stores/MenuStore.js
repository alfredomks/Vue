import { defineStore } from "pinia";

export const useMenuStore=defineStore('menuStore',{
    state:()=>({
        lista_menu:[
            {"id":"1","nombre":"ANALISIS"},
            {"id":"2","nombre":"DISEÑO"},
            {"id":"3","nombre":"DESARROLLO"},
            {"id":"4","nombre":"PRUEBAS"},
            {"id":"5","nombre":"PRODUCCIÓN"}
        ],
        visible:false,
        fase:null
    })
})