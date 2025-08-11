import { defineStore } from "pinia";

export const useRecursoStore=defineStore('recursoStore',{
    state:()=>({
        bol_visible:false,
        bol_cargando:false,
        bol_visible_recurso:false,
        recurso:{
            "itn_id":null,
            "itn_tipo":null,
            "str_nombre":null,
            "str_descripcion":null
        },
        lista_filtros:[
            {"int_id":1,"str_nombre":"ID"},
            {"int_id":2,"str_nombre":"NOMBRE"},
            {"int_id":3,"str_nombre":"TIPO"},
        ],
        cabecera_lista:[
            { title: 'ID',          key: 'int_id', align: 'start',  sortable: true,},
            { title: 'Tipo',        key: 'str_tipo', align: 'start' },
            { title: 'Nombre',      key: 'str_nombre', align: 'start' },
            { title: 'Descripción', key: 'str_descripcion', align: 'start' },
            { title: 'Acciones',    key: 'actions', sortable: false },
        ],
        lista_recursos:[
            {"int_id":1,"str_tipo":"HUMANO","str_nombre":"HOMERO SIMPSON","str_descripcion":"Descripcion 1"},
            {"int_id":2,"str_tipo":"HUMANO","str_nombre":"PERDO CHALALN","str_descripcion":"Descripcion 1"},
            {"int_id":3,"str_tipo":"TECNOLOGICO","str_nombre":"SERVIDOR DE APP","str_descripcion":"Descripcion 1"},
            {"int_id":4,"str_tipo":"TECNOLOGICO","str_nombre":"SERVICIO DE INTERNET","str_descripcion":"Descripcion 1"},
        ],
        lista_tipo:[
            {"int_id":1,"str_nombre":"HUMANO"},
            {"int_id":2,"str_nombre":"TECNOLOGICO"},
            {"int_id":3,"str_nombre":"SOFTWARE"},
            {"int_id":4,"str_nombre":"HARDWARE"},
        ],
    }),

    
    actions:{
        add(){
            
        },
        update(){
            
        },
        delete(){
            
        }
    }
})