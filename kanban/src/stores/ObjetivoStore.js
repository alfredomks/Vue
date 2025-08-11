import { defineStore } from "pinia";

export const useObjetivoStore=defineStore('objetivoStore',{
    state:()=>({
        bol_visible:false,
        bol_visible_objetivo:false,
        bol_cargando:false,
        objetivo:{  "int_id":null,
                    "int_tipo":null,
                    "str_descripcion":null
                },
        lista_filtros:[
            {"int_id":1,"str_nombre":"ID"},
            {"int_id":2,"str_nombre":"NOMBRE"},
            {"int_id":3,"str_nombre":"TIPO"},
            {"int_id":4,"str_nombre":"Descripción"},
            {"int_id":5,"str_nombre":"Fecha crea"}
        ],
        cabecera_lista:[
           
            { title: 'Tipo',          key: 'str_tipo', align: 'start' },
            { title: 'Descripción',   key: 'str_descripcion', align: 'start' },
            { title: 'Acciones',      key: 'actions', sortable: false },
        ],
        
        lista_objetivos:[
            {"int_id":1,"int_tipo":1,"str_tipo":"PRINCIPAL","str_descripcion":"OFRECER SERVICIO EN LINEA"},
            {"int_id":2,"int_tipo":2,"str_tipo":"SECUNDARIO","str_descripcion":"Objetivo secundario 1"},
            {"int_id":3,"int_tipo":2,"str_tipo":"SECUNDARIO","str_descripcion":"Objetivo secundario 2"},
            {"int_id":4,"int_tipo":2,"str_tipo":"SECUNDARIO","str_descripcion":"Objetivo secundario 3"},
        ],
        lista_tipo:[
            {"int_id":1,"str_nombre":"PRINCIPAL"},
            {"int_id":2,"str_nombre":"SECUNDARIO"},
        ],
    }),

    getters:{
        getLog(state){
            return state.lista_tareas;
        }
    },

    actions:{
        add(){
            
        },
        update(){
            
        },
        delete(){
            
        }
    }
})