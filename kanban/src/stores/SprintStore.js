import { defineStore } from "pinia";

export const useSprintStore=defineStore('sprintStore',{
    state:()=>({
        visible:false,
        cargando:false,
        bol_visible_sprint:false,
        sprint:{
            "id":null,
            "fecha_inicio":null,
            "fecha_fin":null,
            "descripcion":null,
        },
        cabecera_lista:[
            { title: 'ID',            key: 'id',            align: 'start',  sortable: true,},
            { title: 'Fecha inicio',  key: 'fecha_inicio',  align: 'start' },
            { title: 'Fecha fin',     key: 'fecha_fin',     align: 'start' },
            { title: 'Descripción',   key: 'descripcion',   align: 'start' },
            { title: 'Acciones',      key: 'actions', sortable: false },
        ],
        lista_sprints:[
            {"id":1,"fecha_inicio":"2025-01-01","fecha_fin":"2025-01-05","descripcion":"Presentar el analisis de la app"},
            {"id":1,"fecha_inicio":"2025-01-06","fecha_fin":"2025-01-11","descripcion":"Completar el diseño de la app"},
            {"id":1,"fecha_inicio":"2025-01-12","fecha_fin":"2025-01-17","descripcion":"Completar el desarrollo de la app"},
            {"id":1,"fecha_inicio":"2025-01-18","fecha_fin":"2025-01-25","descripcion":"Publicar la app"},
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