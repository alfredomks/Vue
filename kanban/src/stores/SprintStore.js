import { defineStore } from "pinia";

export const useSprintStore=defineStore('sprintStore',{
    state:()=>({
        visible:false,
        cargando:false,
        bol_visible_sprint:false,
        sprint:{
            "int_id":null,
            "str_fecha_inicio":null,
            "str_fecha_fin":null,
            "str_descripcion":null,
        },
        lista_filtros:[
            {"int_id":1,"str_nombre":"ID"},
            {"int_id":2,"str_nombre":"NOMBRE"},
            {"int_id":3,"str_nombre":"TIPO"},
            {"int_id":4,"str_nombre":"Descripción"},
            {"int_id":5,"str_nombre":"Fecha crea"}
        ],
        cabecera_lista:[
           
            { title: 'Fecha inicio',  key: 'str_fecha_inicio',  align: 'start' },
            { title: 'Fecha fin',     key: 'str_fecha_fin',     align: 'start' },
            { title: 'Descripción',   key: 'str_descripcion',   align: 'start' },
            { title: 'Acciones',      key: 'actions', sortable: false },
        ],
        lista_sprints:[
            {"int_id":1,"str_fecha_inicio":new Date("2025-01-01"),"str_fecha_fin":new Date("2025-01-05"),"str_descripcion":"Presentar el analisis de la app"},
            {"int_id":1,"str_fecha_inicio":new Date("2025-01-06"),"str_fecha_fin":new Date("2025-01-11"),"str_descripcion":"Completar el diseño de la app"},
            {"int_id":1,"str_fecha_inicio":new Date("2025-01-12"),"str_fecha_fin":new Date("2025-01-17"),"str_descripcion":"Completar el desarrollo de la app"},
            {"int_id":1,"str_fecha_inicio":new Date("2025-01-18"),"str_fecha_fin":new Date("2025-01-25"),"str_descripcion":"Publicar la app"},
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